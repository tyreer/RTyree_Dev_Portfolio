const navOptions = document.getElementById("nav-options");
const mainNav = document.getElementById("main-nav");
const navContainer = document.getElementById("nav-container");
const scrollControl = document.getElementById("scroll-control");
const navBars = document.getElementById("nav-bars");

function toggleMenu() {
  const isCollapsed = navOptions.className.includes("nav-options--collapsed");

  // Toggle classes
  mainNav.classList.toggle("main-nav--collapsed");
  mainNav.classList.toggle("main-nav--full-screen");
  navOptions.className = `nav-options${isCollapsed ? "--full-screen" : "--collapsed"}`;
  navContainer.className = `nav-container${isCollapsed ? "--full-screen" : "--collapsed"}`;

  // Manage button
  navBars.textContent = isCollapsed ? "+" : "☰";
  navBars.blur();

  // Disable scroll
  scrollControl.classList.toggle("disable-scroll");
  document.ontouchmove = isCollapsed ? (event) => event.preventDefault() : (event) => !!event;
}

navBars.addEventListener("click", toggleMenu);
[...document.getElementsByClassName("main-nav__link")].forEach((element) =>
  element.addEventListener("click", toggleMenu)
);
