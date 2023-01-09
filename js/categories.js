const categoriesGlobal = () => {
    const data = {
        Столовые_группы: [
            {
                name: "Столовая группа: Стол Burn Cedar + стул Silver Velutto",
                img: "./images/furniture/group.png",
                price: "70000 руб.",
                material: "Велюр / Металл / МДФ",
                category: "Столовые группы",
            },
        ],
        Стулья: [
            {
                name: "Стул B600 SMOKE VL17 BK",
                img: "./images/furniture/8ujpfj3_3.jpg",
                price: "9505 руб.",
                material: "Велюр / Металл",
                category: "Стулья",
            },
        ],
        Столы: [
            {
                name: "Стол ROVENA 200 WHITE OAK CER",
                img: "./images/furniture/8ujpfj3_4-1.jpg",
                price: "70000 руб.",
                category: "Столы",
            },
        ],
    };

    const Столовые_группы = data.Столовые_группы;
    const Стулья = data.Стулья;
    const Столы = data.Столы;
    const all = [...data.Столы, ...data.Стулья, ...data.Столовые_группы];

    console.log(all);

    const categories = (data) => {
        const output = document.querySelector(".output");
        output.innerHTML = "";
        data.forEach((el) => {
            const col = document.createElement("div");
            const box = document.createElement("div");
            const img = document.createElement("img");
            const name = document.createElement("p");

            col.className = "col-4";
            box.className = "categories__box";

            img.src = el.img;
            name.textContent = el.name;

            box.append(img, name);
            col.append(box);
            output.append(col);
        });
    };
    categories(all);

    const categoryItems = ["Все", "Столы", "Стулья", "Столовые группы"];

    const btnRender = () => {
        const cat = document.querySelector(".categories__choise");
        categoryItems.forEach((el) => {
            const button = document.createElement("button");
            button.className = "btn";
            button.textContent = el;
            button.addEventListener("click", () => {
                const result = all.filter((item) => {
                    return item.category === el;
                });
                if (el === "Все") {
                    categories(all);
                } else {
                    categories(result);
                }
            });
            cat.append(button);
        });
    };
    btnRender();

    // текущая категория:
    const btnActive = () => {
        const buttons = document.querySelectorAll(".btn");
        buttons[0].classList.add("active");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", () => {
                buttons.forEach((el, index) => {
                    console.log("parent: " + i, "child: " + index);
                    if (i === index) {
                        el.classList.add("active");
                    } else {
                        el.classList.remove("active");
                    }
                });
            });
        }
    };
    btnActive();

    const input = document.querySelector(".srchI");

    // поиск по нажатию Enter:
    input.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            searchGo();
        }
    });

    const search = document.querySelector(".search");
    // запускаем процесс поиска:
    const searchGo = () => {
        const inVal = input.value.toUpperCase();

        console.log(all);

        const filteredItems = all.filter((el) => {
            const nameEl = el.name.toUpperCase();
            return nameEl.includes(inVal);
        });
        if (filteredItems.length > 0) {
            categories(filteredItems);
        } else {
            document.querySelector(".output").textContent =
                "По такому запросу ничего не найдено. Попробуйте написать запрос иначе.";
        }
        input.value = "";
    };
    searchGo();

    // слушаем кнопку поиска тут:
    search.addEventListener("click", () => {
        searchGo();
    });
};
categoriesGlobal();
