const button = document.querySelector(".cover__button");
const btn__2 = document.querySelector(".cover__btn__2");
const modalCloseButton = document.querySelector(".modalCloseButton");
const modal = document.querySelector(".modal");
const backdropMdl = document.querySelector(".backdrop");
const content = document.querySelector(".modalContent");
const modalBtn = document.querySelector(".modalBtn");
const thankYou = document.querySelector(".thankYou");

let handleTimeOut;
const bot = {
    TOKEN: "5809890640:AAGUX0mfk9eACxQFZqfvqtCkdB9pjTx4x2s",
    chatID: "-895241811",
};

button.addEventListener("click", () => {
    modal.classList.add("modalActive");
    backdropMdl.classList.add("backdropActive");
    thankYou.innerHTML = "";
    content.classList.remove("hideModalContent");
});

btn__2.addEventListener("click", () => {
    modal.classList.add("modalActive");
    backdropMdl.classList.add("backdropActive");
    thankYou.innerHTML = "";
    content.classList.remove("hideModalContent");
});

const removeClasses = () => {
    clearTimeout(handleTimeOut);
    modal.classList.remove("modalActive");
    backdropMdl.classList.remove("backdropActive");
};

const poppingMessage = (text) => {
    content.classList.add("hideModalContent");
    thankYou.innerHTML = text;
    handleTimeOut = setTimeout(removeClasses, 4000);
};

content.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("wor");
    const message = document.querySelector("#inputMessage");
    const number = document.querySelector("#inputNumber");

    if (
        message.value.length > 1 &&
        number.value.length > 5 &&
        number.value.trim() &&
        message.value.trim()
    ) {
        const sendTelegram = `Имя: ${message.value} и Телефон: ${number.value}`;
        console.log(sendTelegram);
        fetch(
            `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${sendTelegram}`,
            { method: "GET" }
        ).then(
            (response) => {
                console.log(response);
                if (response.ok) {
                    poppingMessage(`
                    <h2>Спасибо!</h2>
                    <p>Оператор свяжется с вами в течение суток</p>
                `
                );
                number.value = "";
                message.value = "";
                }
            },
            (error) => {
                poppingMessage(`
                <h2>Ошибка соединения</h2>
                <p>Пожалуйста, попробуйте ещё</p>
            `);
            }
        );
    } else {
        alert("Недостаточно символов");
    }
});

modalCloseButton.addEventListener("click", removeClasses);
backdropMdl.addEventListener("click", removeClasses);
modal.addEventListener("click", (e) => {
    e.stopPropagation();
});
