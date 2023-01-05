const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

function openNav() {
  document.body.classList.add("full-screen");
  menuToggle.classList.add("active");
  nav.classList.add("show");
}

function closeNav() {
  document.body.classList.remove("full-screen");
  menuToggle.classList.remove("active");
  nav.classList.remove("show");
}

function isNavOpened() {
  return nav.classList.contains("show");
}

menuToggle.addEventListener("click", () => {
  isNavOpened() ? closeNav() : openNav();
});

window.addEventListener("keydown", (event) => {
  if (event.key == "Escape" && isNavOpened()) {
    closeNav();
  }
});

const likeButtons = document.querySelectorAll(
  ".popular-listing .box .review .like"
);

likeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("fa-regular");
    btn.classList.toggle("fa-solid");
  });
});
