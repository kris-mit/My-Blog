const modal_btn = document.querySelectorAll('.modal-window-btn');
const modal_popup = document.querySelector('.modal');
const exit = document.querySelectorAll('.modal__exit');


modal_btn.forEach(item => item.addEventListener('click', function() {
    modal_popup.style.visibility = "visible";
    exit.forEach(item => item.addEventListener('click', function() {
        modal_popup.style.visibility = "hidden";
    }))
}))

const message_exit = document.querySelector('.message__box__exit');
const message = document.querySelector('.message__box');

message_exit.addEventListener('click', function() {
    message.style.visibility = 'hidden';
})


const hamburger_menu = document.querySelector('.header__menu');
const nav_menu = document.querySelector('.container__links');


hamburger_menu.addEventListener('click', function() {
    hamburger_menu.classList.toggle('open-hamburger')
    nav_menu.style.visibility = 'visible'
    nav_menu.classList.toggle("open")
})