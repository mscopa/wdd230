const menu = document.getElementById('menu');
const nav = document.querySelector('nav');
menu.addEventListener('click', () => {
    nav.classList.toggle('open');
    menu.classList.toggle('open');
})