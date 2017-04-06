'use strict'

document.getElementById("navBars").addEventListener("click", toggleMobileMenu);

[...document.getElementsByClassName("menuAnchor")]
.forEach(element => element.addEventListener("click", toggleMobileMenu));

function toggleMobileMenu() {
  if (document.getElementById("navOptions").className === "navDisplayToggleOff") {
    document.getElementById("main-nav").className = "main-nav-opened";
    document.getElementById("navOptions").className = "navDisplayToggleOn";
    document.getElementById("navContainer").className = "navContainerToggleOn";
    document.getElementById("scrollControl").className = "disable-scroll";
    document.getElementById("navBars").textContent = "✕";
  } else {
    document.getElementById("navOptions").className = "navDisplayToggleOff";
    document.getElementById("main-nav").className = "main-nav";
    document.getElementById("navContainer").className = "navContainer";
    document.getElementById("scrollControl").className = "";
    document.getElementById("navBars").textContent = "☰";
  }
};
