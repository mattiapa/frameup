const navToggle = document.querySelector('.nav-toggle')
const mainNav = document.querySelector('.main-nav')
const hamburger = document.querySelector('.hamburger')

navToggle.addEventListener("click", () => {

    mainNav.toggleAttribute('is-open')
    hamburger.toggleAttribute('is-open')
    navToggle.toggleAttribute('is-open')
})