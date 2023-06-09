const burgerMenu = document.querySelector(".header-menu-burger");

document.addEventListener('click', e => {
    if (e.target.closest('.burger-btn')) {
        e.target.closest('.burger-btn').classList.toggle('active');
        burgerMenu.classList.toggle('_opened');

        if (e.target.closest('.burger-btn').classList.contains('active')) {
            document.querySelector('body').style.overflow = 'hidden';
        } else {
            document.querySelector('body').style.overflow = 'visible';
        }
    }
})