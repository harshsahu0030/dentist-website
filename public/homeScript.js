let screenwidth = screen.width;

var swiper = new Swiper(".mySwiper", {
  slidesPerView: screenwidth > 1024 ? 4 : screenwidth > 640 ? 2 : 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

console.log("Hello");
