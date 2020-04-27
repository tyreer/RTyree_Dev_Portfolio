let intersectionCount = 0;
const bgDivs = document.getElementsByClassName("div-bg");

const topCallback = () => {
  if (intersectionCount === 0) {
    bgDivs[0].classList.remove("div-bg--initial-left");
    bgDivs[1].classList.remove("div-bg--initial-right");
  } else if (intersectionCount % 2 !== 0) {
    bgDivs[0].classList.add("div-bg--left", "div-bg--fast");
    bgDivs[1].classList.add("div-bg--right", "div-bg--fast");
  } else {
    bgDivs[0].classList.remove("div-bg--left");
    bgDivs[1].classList.remove("div-bg--right");
  }

  intersectionCount += 1;
};

const topOfPage = document.getElementById("top");
const observer = new IntersectionObserver(topCallback);
observer.observe(topOfPage);
