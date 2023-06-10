const header = document.querySelector(".header");
const main = document.querySelector('main');

window.addEventListener("scroll", checkScroll);
document.addEventListener("DOMContentLoaded", checkScroll);

function checkScroll() {
    let scrollPos = window.scrollY;
    const controlPos = document.querySelector('.hero').offsetTop + document.querySelector('.hero').offsetHeight;
    const gate = 20;

    if(scrollPos > 300) {
        header.classList.add('fixed');

        if(scrollPos > controlPos + gate) {
            header.classList.add('show-header')
        } else {
            header.classList.remove('show-header')
        }
    } else {
        header.classList.remove('fixed');
        main.style.cssText = "padding-top: 0px;"
    }
}