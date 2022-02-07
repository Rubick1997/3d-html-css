document.addEventListener("DOMContentLoaded", () => {
  const showSlier = new Swiper(".showcase-carousel", {
    loop: true,
    slidesPerView: 3,
    speed: 1800,
    centeredSlides: true,
    navigation: {
      nextEl: ".showcase-navigation__next",
      prevEl: ".showcase-navigation__prev",
    },
  });
  document.querySelector("video").playbackRate = 2;
});
