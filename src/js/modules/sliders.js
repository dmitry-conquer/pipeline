import Swiper, { Autoplay, Navigation } from "swiper";

const infinitySlides = document.querySelectorAll(".slider-infinity");
const featuresInner = document.querySelector(".features__inner");
const pricingSection = document.querySelector(".pricing__content");
let featuresSlider = null;
let pricingSlider = null;
let infinitySlider = null;
function initPricingSlider() {
  if (pricingSection) {
    if (window.innerWidth < 1024 && !pricingSlider) {
      pricingSlider = new Swiper(".pricing__content", {
        wrapperClass: "pricing__columns",
        slideClass: "column-pricing",
        modules: [Navigation],
        spaceBetween: 16,
        speed: 1000,
        grabCursor: true,
        centeredSlides: true,
        initialSlide: 1,
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1.7,
          },
        },
        navigation: {
          prevEl: ".navigation-btn_prev",
          nextEl: ".navigation-btn_next",
        },
      });
    } else if (window.innerWidth >= 1024 && pricingSlider) {
      pricingSlider.destroy();
      pricingSlider = null;
    }
  }
}

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
function initInfinitySlider() {
  infinitySlides.forEach(slider => {
    if (slider) {
      infinitySlider = new Swiper(slider, {
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
        allowTouchMove: false,
        breakpoints: {
          0: {
            spaceBetween: 35,
          },
          992: {
            spaceBetween: 60,
          },
        },
      });
    }
  });
}

initPricingSlider();
initFeaturesSlider();
initInfinitySlider();
window.addEventListener("resize", () => {
  initPricingSlider();
  initFeaturesSlider();
  initInfinitySlider();
});
