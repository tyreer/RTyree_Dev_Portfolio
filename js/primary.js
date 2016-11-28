'use strict'

document.getElementById("navBars").addEventListener("click", toggleMobileMenu);

function toggleMobileMenu () {
  if (document.getElementById("navOptions").className === "navOptions navDisplayToggleOff"){
    document.getElementById("navOptions").className = "navDisplayToggleOn";
  } else {
    document.getElementById("navOptions").className = "navOptions navDisplayToggleOff";
  }
}
