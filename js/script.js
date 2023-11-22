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
