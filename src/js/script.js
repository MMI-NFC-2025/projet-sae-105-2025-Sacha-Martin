const toggle = document.querySelector(".btn-menu__img");
const menu = document.querySelector(".header__menu");
const nav = document.querySelector(".header__nav");
const page = document.body;
console.log(toggle, menu)
if (toggle && menu) {
    toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const isOpen = toggle.ariaExpanded === "true";
        const isClosed = !isOpen;


        toggle.ariaExpanded = isClosed ? "true" : "false";
        nav.ariaExpanded = isClosed ? "true" : "false";
        menu.ariaHidden = isOpen ? "true" : "false";
        logo.classList.toggle("header__logo--extend", isClosed);
        page.classList.toggle("u-noscroll", isClosed);
    });

    const menuLinks = menu.querySelectorAll('.menu__link');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggle.ariaExpanded = "false";
            nav.ariaExpanded = "false";
            menu.ariaHidden = "true";
            page.classList.remove("u-noscroll");
       });
    });
}