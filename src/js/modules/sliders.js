import Swiper, { Autoplay } from "swiper";

const infinitySlides = document.querySelectorAll(".slider-infinity");
const featuresInner = document.querySelector(".features__inner");
let featuresSlider = null;

function initFeaturesSlider() {
  if (featuresInner) {
    if (window.innerWidth < 768 && !featuresSlider) {
      featuresSlider = new Swiper(".features__inner", {
        wrapperClass: "features__grid",
        slideClass: "features-item_box",
        modules: [],
        spaceBetween: 16,
        speed: 1000,
        slidesPerView: 2.1,
        grabCursor: true,
      });
    } else if (window.innerWidth >= 768 && featuresSlider) {
      featuresSlider.destroy();
      featuresSlider = null;
    }
  }
}

infinitySlides.forEach(slider => {
  if (slider) {
    const infinitySlider = new Swiper(slider, {
      wrapperClass: "slider-infinity-wrapper",
      slideClass: "slider-infinity-slide",
      modules: [Autoplay],
      centeredSlides: true,
      spaceBetween: 60,
      speed: 7000,
      autoplay: {
        delay: 5,
      },
      slidesPerView: "auto",
      loop: true,
      watchSlidesProgress: true,
      grabCursor: true,

      breakpoints: {
        0: {
          spaceBetween: 20,
        },
        992: {
          spaceBetween: 60,
        },
      },
    });
  }
});
initFeaturesSlider();
window.addEventListener("resize", initFeaturesSlider);
