const navOptions = document.getElementById("nav-options");
const mainNav = document.getElementById("nav");
const navContainer = document.getElementById("nav-container");
const scrollControl = document.getElementById("scroll-control");
const navButton = document.getElementById("nav-button");

// const getCollapsed = (element) => (targetClass) => element.className.includes(targetClass);

function getCollapsed({ element, targetClass }) {
  return element.className.includes(targetClass);
}

function getClassName({ baseClass, isCollapsed }) {
  return `${baseClass} ${baseClass}${isCollapsed ? "--full-screen" : "--collapsed"}`;
}

function toggleMenu() {
  // const isCollapsed = getCollapsed(navOptions)("nav-options--collapsed");

  const collapsedIndicator = { element: navOptions, targetClass: "nav-options--collapsed" };
  const isCollapsed = getCollapsed(collapsedIndicator);

  // Toggle classes
  const mainNavConfig = { baseClass: "nav", isCollapsed };
  const navOptionsConfig = { baseClass: "nav-options", isCollapsed };
  const navContainerConfig = { baseClass: "nav-container", isCollapsed };

  mainNav.className = getClassName(mainNavConfig);
  navOptions.className = getClassName(navOptionsConfig);
  navContainer.className = getClassName(navContainerConfig);

  // Manage button
  navButton.blur();

  // Disable scroll
  scrollControl.classList.toggle("disable-scroll");

  // Is this needed?
  document.ontouchmove = isCollapsed ? (event) => event.preventDefault() : (event) => !!event;

  // Set ARIA attributes
  navButton.setAttribute("aria-expanded", !!isCollapsed);
}

navButton.addEventListener("click", toggleMenu);
[...document.getElementsByClassName("nav__link")].forEach((element) => element.addEventListener("click", toggleMenu));
