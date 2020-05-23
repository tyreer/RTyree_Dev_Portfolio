let intersectionCount = 0;
const bgDivs = document.getElementsByClassName("div-bg");
const title = document.getElementsByClassName("title-container--initial")[0];

const topCallback = () => {
  if (intersectionCount === 0) {
    bgDivs[0].classList.remove("div-bg--initial-left");
    bgDivs[1].classList.remove("div-bg--initial-right");
    title.classList.remove("title-container--initial");
  } else if (intersectionCount % 2 !== 0) {
    bgDivs[0].classList.add("div-bg--wide-left", "div-bg--fast");
    bgDivs[1].classList.add("div-bg--wide-right", "div-bg--fast");
  } else {
    bgDivs[0].classList.remove("div-bg--wide-left");
    bgDivs[1].classList.remove("div-bg--wide-right");
  }

  intersectionCount += 1;
};

const topOfPage = document.getElementById("top");
const observer = new IntersectionObserver(topCallback);
observer.observe(topOfPage);
