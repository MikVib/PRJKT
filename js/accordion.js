const data = [
    {
        title: 'История',
        image:'../images/main/signboard.jpg', 
        imageAlt:'Фабрика Самарские Стулья',
        text: `Наша фабрика является крупным производителем столов и стульев, ведущим свою деятельность свыше 10 лет. Производство столов и стульев осуществляется в соответствии с лучшими европейскими стандартами. Мы обеспечиваем высокий уровень качества, оптимально сочетающийся с доступными ценами всего ассортимента продукции. Этот баланс обусловлен наличием собственного металлического производства, покрасочного участка, швейных и сборочных цехов.`
    },
    {
        title: 'Продукция',
        image:'../images/main/master.jpg', 
        imageAlt:'Фабрика Самарские Стулья',
        text: `Столы и стулья от производителя, выпускаемые нашей мебельной компанией, пользуются повышенным спросом в Росии и СНГ. Мы сотрудничаем исключительно с проверенными поставщиками, поэтому производим свою мебель из надежных комплектующих, создавая мебель, обладающую длительным периодом службы. Это позволяет нам радовать своих покупателей только ходовыми и востребованными моделями, для тестирования которых мы располагаем собственной розничной сетью.`,
    },
    {
        title: 'Развитие',
        image:'../images/main/retail.jpg', 
        imageAlt:'Фабрика Самарские Стулья',
        text: `Наше производство представлено наиболее востребованными и популярными моделями. Благодаря своевременному выполнению взятых на себя обязательств и внимательному мониторингу изменений рынка, нам удается добиваться постоянного расширения географии деятельности и соответствовать современным тенденциям спроса.`
    },
]


const contentRender = (data) =>{
    const accordion = document.querySelector('.accordion')
    data.forEach(el=>{
        const title = document.createElement('h3')
        title.textContent = el.title

        const wrap = document.createElement('div')
        const name = document.createElement('div')
        const imgCnt = document.createElement('img')
        imgCnt.alt = el.imageAlt
        imgCnt.src = el.image

        const content = document.createElement('div')
        const text = document.createElement('p')
        const image = document.createElement('img')
        image.src='./images/plus.png'
        

        content.className = 'accordion__content'
        name.className = 'accordion__name'
        wrap.className = 'accordion__wrap'
        image.className = 'plus'
        imgCnt.className = 'imgCntAcc'
        accordion.append(wrap)
        wrap.append(name,content)
        name.append(title,image)
        content.append(imgCnt,text)
        text.textContent = el.text
    })
}
contentRender(data)




const accordion = () => {
    const accordion = document.querySelectorAll('.accordion__wrap')
    accordion.forEach(el => {
        el.addEventListener('click', () => {
            el.classList.toggle('accordion__active')
        })
    })
}

accordion()




