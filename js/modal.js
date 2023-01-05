

const coverBtn = document.querySelector('.cover__button')
const backdropModal = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')
const modalCloseButton = document.querySelector('.modalCloseButton')
const thankYou = document.querySelector('.thankYou')
const modalApplyButton = document.querySelector('.modalApplyButton')
const modalContent = document.querySelector('.modalContent')



const handleModalRemove = () => {
    backdropModal.classList.remove('backdropActive')
    modal.classList.remove('modalActive')
}


coverBtn.addEventListener('click', () => {
    backdropModal.classList.add('backdropActive')
    modal.classList.add('modalActive')
    modalContent.classList.remove('hideContent')
    thankYou.innerHTML = ''

})

modalCloseButton.addEventListener('click', handleModalRemove)

backdropModal.addEventListener('click', handleModalRemove)

modal.addEventListener('click', (e) => {
    e.stopPropagation()
})

modalApplyButton.addEventListener('click', () => {
    modalContent.classList.add('hideContent')
    thankYou.innerHTML = `
        <h2>Спасибо!</h2>
        <p>Наш оператор ответит вам в течение дня</p>
    `
})



