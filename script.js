import { modal } from './modal.js'

// Variáveis
const form = document.querySelector('form')
const inputweight = document.querySelector('#weight')
const inputheight = document.querySelector('#height')

const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal-.title span')
const modalBtnClose = document.querySelector('.modal button.close')

const modal = {

    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal-.title span'),
    BtnClose: document.querySelector('.modal button.close'),

    open: function() {
        modalWrapper.classList.add('open')
    },
    close: function() {
        modalWrapper.classList.remove('open')
    }
}

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputweight.value 
    const height = inputheight.value

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`
    
    modalMessage.innerText = message
    modal.open()
}

modalBtnClose.onclick = () => {
    modal.close()
}

