'use strict'

document.getElementById("navBars").addEventListener("click", toggleMobileMenu);

//Is it awful to declare a global variable here?
const menuAnchors = document.getElementsByClassName("menuAnchor");

//Could I use map here, or would that require Babel?
for (let x = 0; x<menuAnchors.length; x++){
  menuAnchors[x].addEventListener("click", toggleMobileMenu);
}

function toggleMobileMenu () {
  if (document.getElementById("navOptions").className === "navDisplayToggleOff"){
    document.getElementById("navOptions").className = "navDisplayToggleOn";
  } else {
    document.getElementById("navOptions").className = "navDisplayToggleOff";
  }
}
