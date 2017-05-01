'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

document.getElementById("nav-bars").addEventListener("click", toggleMobileMenu);

[].concat(_toConsumableArray(document.getElementsByClassName("menu-anchor"))).forEach(function (element) {
  return element.addEventListener("click", toggleMobileMenu);
});

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