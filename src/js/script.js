const toggle = document.querySelector('.header__btn-menu');
const closeBtn = document.querySelector('.header__close');
const nav = document.querySelector('.menu');
const page = document.body;

console.log(toggle, closeBtn, nav, page);

toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    page.classList.toggle('no-scroll');
});

closeBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    page.classList.toggle('no-scroll');
});