const navBtn = document.querySelector(".nav-btn");
const navList = document.querySelector(".top-nav");

// nav toggle
navBtn.addEventListener("click", () => {
  navList.classList.toggle("show-links");
  let html;
  if (navList.classList.contains("show-links")) {
    html = `<ul class="top-nav inserted">${
      document.querySelector(".top-nav").innerHTML
    }</ul>`;
    document.querySelector("nav").insertAdjacentHTML("afterend", html);
  } else {
    document.querySelector(".inserted").remove();
  }
});
