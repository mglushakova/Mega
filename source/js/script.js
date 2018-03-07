//Menu open
var menuButton = document.querySelector(".main-nav__button");
var menu = document.querySelector(".main-nav");

menu.classList.add("main-nav--closed");

menuButton.addEventListener("click", function (event) {
  event.preventDefault();

  if (menu.classList.contains("main-nav--closed")) {
    menu.classList.remove("main-nav--closed");
    menu.classList.add("main-nav--opened");
  } else {
    menu.classList.add("main-nav--closed");
    menu.classList.remove("main-nav--opened");
  }
});
