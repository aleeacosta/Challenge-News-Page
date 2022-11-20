const menuBtn = document.getElementById("header__menu");
const menuClose = document.getElementById("menu-close");

menuBtn.addEventListener("click", function() {
    document.getElementById("menu__mobile").style.display = 'flex';
});

menuClose.addEventListener("click", function() {
    document.getElementById("menu__mobile").style.display = 'none';
});