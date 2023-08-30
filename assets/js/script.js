var swiper = new Swiper(".love", {
  spaceBetween: 30,
  loop: 'true',
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

$(".play").on("click", function () {
  Fancybox.show([
    {
      src: "https://www.youtube.com/shorts/3qnOVDhb4Vo",
      type: "video",
      ratio: 16 / 10,
      width: 1440,
      height: 920,

    },
  ]);
});

