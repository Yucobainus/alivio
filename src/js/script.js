const iconMenu = document.querySelector('.menu-icon')
const menuBody = document.querySelector('.mobile-header')
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
    })
}