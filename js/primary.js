'use strict'

document.getElementById("nav-bars").addEventListener("click", toggleMobileMenu);

[...document.getElementsByClassName("menu-anchor")]
.forEach(element => element.addEventListener("click", toggleMobileMenu));

function toggleMobileMenu() {
  if (document.getElementById("nav-options").className === "nav-options--collapsed") {
    document.getElementById("main-nav").className = "main-nav--full-screen";
    document.getElementById("nav-options").className = "nav-options--full-screen";
    document.getElementById("nav-container").className = "nav-container--full-screen";
    document.getElementById("scroll-control").className = "disable-scroll";
    document.getElementById("nav-bars").textContent = "✕";

    document.ontouchmove = (event) => {
    event.preventDefault();
  }
  } else {
    document.getElementById("nav-options").className = "nav-options--collapsed";
    document.getElementById("main-nav").className = "main-nav--collapsed";
    document.getElementById("nav-container").className = "nav-container--collapsed";
    document.getElementById("scroll-control").className = "";
    document.getElementById("nav-bars").textContent = "☰";

    document.ontouchmove = (event) => true;
  }
};
