const prevButton = document.querySelector(".slider__nav-left");
const nextButton = document.querySelector(".slider__nav-right");
const countButtons = document.querySelectorAll(".slider__nav-item");

const itemsContainer = document.querySelector(".slider__items");
const items = document.querySelectorAll(".slider__item");

let width = document.querySelector(".slider").offsetWidth;
let count = 0;

addActive(count);

function sliderMove(count) {
  itemsContainer.style.transform = "translate(-" + count * width + "px)";
  addActive(count);
}

function addActive(count) {
  countButtons.forEach((item) => {
    if (item.dataset.count == count) {
      item.querySelector("img").classList.add("active");
    } else {
      item.querySelector("img").classList.remove("active");
    }
  });
}

window.addEventListener("resize", () => {
  width = document.querySelector(".slider").offsetWidth;
  sliderMove(count);
});

prevButton.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = items.length - 1;
  }
  sliderMove(count);
});

nextButton.addEventListener("click", () => {
  count++;
  if (count >= items.length) {
    count = 0;
  }
  sliderMove(count);
});

countButtons.forEach((item) => {
  item.addEventListener("click", (e) => {
    count = e.currentTarget.dataset.count;
    sliderMove(count);
  });
});
