let intersectionCount = 0;
const titleBrackets = document.getElementsByClassName("title__bracket");

function topCallback() {
  if (intersectionCount === 0) {
    titleBrackets[0].classList.remove("title__bracket--initial-left");
    titleBrackets[1].classList.remove("title__bracket--initial-right");
  } else if (intersectionCount % 2 !== 0) {
    titleBrackets[0].classList.add("title__bracket--wide-left", "title__bracket--fast");
    titleBrackets[1].classList.add("title__bracket--wide-right", "title__bracket--fast");
  } else {
    titleBrackets[0].classList.remove("title__bracket--wide-left");
    titleBrackets[1].classList.remove("title__bracket--wide-right");
  }

  intersectionCount += 1;
}

const topOfPage = document.getElementById("top-intersection");
const observer = new IntersectionObserver(topCallback);
observer.observe(topOfPage);
