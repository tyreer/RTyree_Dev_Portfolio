const navOptions = document.getElementById("nav-options");
const mainNav = document.getElementById("nav");
const navContainer = document.getElementById("nav-container");
const scrollControl = document.getElementById("scroll-control");
const navButton = document.getElementById("nav-button");

function toggleMenu() {
  const isCollapsed = navOptions.className.includes("nav-options--collapsed");

  // Toggle classes
  mainNav.classList.toggle("nav--collapsed");
  mainNav.classList.toggle("nav--full-screen");
  navOptions.className = `nav-options${isCollapsed ? "--full-screen" : "--collapsed"}`;
  navContainer.className = `nav-container nav-container${isCollapsed ? "--full-screen" : "--collapsed"}`;

  // Manage button
  navButton.blur();

  // Disable scroll
  scrollControl.classList.toggle("disable-scroll");
  document.ontouchmove = isCollapsed ? (event) => event.preventDefault() : (event) => !!event;

  // Set ARIA attributes
  navButton.setAttribute("aria-expanded", !!isCollapsed);
}

navButton.addEventListener("click", toggleMenu);
[...document.getElementsByClassName("nav__link")].forEach((element) => element.addEventListener("click", toggleMenu));
