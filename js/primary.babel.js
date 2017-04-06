'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

document.getElementById("navBars").addEventListener("click", toggleMobileMenu);

[].concat(_toConsumableArray(document.getElementsByClassName("menuAnchor"))).forEach(function (element) {
  return element.addEventListener("click", toggleMobileMenu);
});

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