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
    document.querySelector(".inserted").addEventListener("click", navBubbling);
  } else {
    document.querySelector(".inserted").remove();
  }
});

// sticky nav
// https://www.youtube.com/watch?v=V-CBdlfCPic
const header = document.querySelector("header");
// create an element and apply that before the real header
const scrollWatcher = document.createElement("div");

header.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) header.classList.add("sticking");
  else {
    header.classList.remove("sticking");
  }
  // header.classList.toggle("sticking", !entries[0].isIntersecting);
});

navObserver.observe(scrollWatcher);

navList.addEventListener("click", navBubbling);

function navBubbling(e) {
  e.preventDefault();
  const el = e.target.closest(".top-nav-link");
  if (el) {
    document.querySelector(`.section-${el.dataset.link}`).scrollIntoView({
      behavior: "smooth",
    });
  }
}
