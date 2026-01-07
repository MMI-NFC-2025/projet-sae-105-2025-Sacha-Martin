// Menu

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


// Carousel

const carousel = document.querySelector("div.carousel__container");
const prevButton = document.querySelector("button.carousel__button--prev");
const nextButton = document.querySelector("button.carousel__button--next");

if (carousel) {
    const premierItem = document.querySelector(".carousel__item");

    function getScrollAmount() {
        return premierItem.clientWidth;
    }

    prevButton.addEventListener("click", () => {
        carousel.scrollBy({
            left: -getScrollAmount(),
            behavior: "smooth"
        });
    });

    nextButton.addEventListener("click", () => {
        carousel.scrollBy({
            left: getScrollAmount(),
            behavior: "smooth"
        });
    });
    window.addEventListener("resize", () => {
    });
}