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

//Prize category open
var bookedButton = document.querySelector(".prize__status--booked");
var availableButton = document.querySelector(".prize__status--available");
var bookedList = document.querySelector(".prize__category--booked");
var availableList = document.querySelector(".prize__category--available");

bookedButton.addEventListener("click", function (event) {
  event.preventDefault();

  if ( !bookedButton.classList.contains("prize__status--active") ) {
    bookedButton.classList.add("prize__status--active");
    availableButton.classList.remove("prize__status--active");
    bookedList.classList.add("prize__category--active");
    availableList.classList.remove("prize__category--active");
  }
});

availableButton.addEventListener("click", function (event) {
  event.preventDefault();

  if ( !availableButton.classList.contains("prize__status--active") ) {
    availableButton.classList.add("prize__status--active");
    bookedButton.classList.remove("prize__status--active");
    availableList.classList.add("prize__category--active");
    bookedList.classList.remove("prize__category--active");
  }
});
