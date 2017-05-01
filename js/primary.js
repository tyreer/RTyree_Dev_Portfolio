'use strict'

document.getElementById("nav-bars").addEventListener("click", toggleMobileMenu);

[...document.getElementsByClassName("menu-anchor")]
.forEach(element => element.addEventListener("click", toggleMobileMenu));

function toggleMobileMenu() {
  if (document.getElementById("nav-options").className === "nav-display-toggle-off") {
    document.getElementById("main-nav").className = "main-nav-opened";
    document.getElementById("nav-options").className = "nav-display-toggle-on";
    document.getElementById("nav-container").className = "nav-container-toggle-on";
    document.getElementById("scroll-control").className = "disable-scroll";
    document.getElementById("nav-bars").textContent = "✕";
  } else {
    document.getElementById("nav-options").className = "nav-display-toggle-off";
    document.getElementById("main-nav").className = "main-nav";
    document.getElementById("nav-container").className = "nav-container";
    document.getElementById("scroll-control").className = "";
    document.getElementById("nav-bars").textContent = "☰";
  }
};
