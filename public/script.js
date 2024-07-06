let sliderBar = document.getElementById("slider-bar");
let menuIcon = document.getElementById("menu-icon");
let closeIcon = document.getElementById("close-icon");

menuIcon.addEventListener("click", () => {
  sliderBar.classList.remove("hidden");
  sliderBar.classList.add("flex");
});

closeIcon.addEventListener("click", () => {
  sliderBar.classList.remove("flex");
  sliderBar.classList.add("hidden");
});
