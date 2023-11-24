// tabbed content
const contents = document.querySelectorAll(".content");
const btns = document.querySelectorAll(".btn");
const btnSection = document.querySelector(".buttons-section");

let tabNum;
btnSection.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    btns.forEach((el) => el.classList.remove("tab-active"));
    e.target.classList.add("tab-active");
    tabNum = e.target.dataset.tab;
  }
  contents.forEach((el) => {
    if (el.dataset.content === tabNum) el.classList.add("show-tab");
    else {
      el.classList.remove("show-tab");
    }
  });
});

// slide

const slides = document.querySelectorAll(".slide");
const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");

let curSlide = 0;
const maxSlide = slides.length;
// init

btnNext.addEventListener("click", () => {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slides.forEach((el, i) => {
    el.style.transform = `translateX(${(i - curSlide) * 100}%)`;
    console.log(el.style.transform, i, curSlide);
  });
});

btnPrev.addEventListener("click", () => {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  slides.forEach((el, i) => {
    el.style.transform = `translateX(${(i - curSlide) * 100}%)`;
    console.log(el.style.transform, i, curSlide);
  });
});
