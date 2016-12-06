'use strict'

document.getElementById("navBars").addEventListener("click", toggleMobileMenu);

//Is it awful to declare a global variable here?
const menuAnchors = document.getElementsByClassName("menuAnchor");

//Could I use map here, or would that require Babel?
for (let x = 0; x<menuAnchors.length; x++){
  menuAnchors[x].addEventListener("click", toggleMobileMenu);
}

function touchstart(e) {
    e.preventDefault()
}

function touchmove(e) {
    e.preventDefault()
}

function toggleMobileMenu () {
  if (document.getElementById("navOptions").className === "navDisplayToggleOff"){
    document.getElementById("navOptions").className = "navDisplayToggleOn";
    document.getElementById("scrollControl").className = "disableScroll";
    document.getElementById("navBars").textContent = "✕";
    document.addEventListener('touchstart', this.touchstart);
    document.addEventListener('touchmove', this.touchmove);

  } else {
    document.getElementById("navOptions").className = "navDisplayToggleOff";
    document.getElementById("scrollControl").className = "";
    document.getElementById("navBars").textContent = "☰";
    document.removeEventListener('touchstart', this.touchstart);
    document.removeEventListener('touchmove', this.touchmove);
  }


}
