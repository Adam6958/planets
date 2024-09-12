
//przycisk i menu mobilne
const mobileMenu = document.querySelector(".navbar-menu-mobile");
const hamburger = document.querySelector(".navbar-hamburger");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("show-mobile-menu")
})
