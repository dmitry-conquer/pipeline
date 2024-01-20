import Swiper, { Autoplay } from "swiper";

const infinitySlides = document.querySelectorAll(".slider-infinity");

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

      // Events
      /*
                on: {
                   // - - - - - - - [custom fraction] - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                   init: function (swiper) {
                     const allSliders = document.querySelector('.slider__all');
                     allSliders.innerHTML = swiper.slides.length;
                     console.log(allSliders.innerHTML);
                   },
                   slideChange: function (swiper) {
                     const currentSlide = document.querySelector('.slider__current');
                     currentSlide.innerHTML = swiper.realIndex + 1;
                     console.log(currentSlide.innerHTML);
                   },
       
       
                   // - - - - - - - [tabs] - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                   init: function(swiper) {
                      const captions = document.querySelectorAll('.captions-courses__item');
                      captions.forEach((item, index) => {
                         item.addEventListener('click', function(e) {
                            swiper.slideTo(index, 800)
                         });
                      })
                   },
                   slideChange: function(swiper) {
                      const captions = document.querySelectorAll('.captions-courses__item');
                      captions.forEach((item) => {
                         item.classList.remove('_active');
                      })
                      captions[swiper.realIndex].classList.add('_active');
                   },
                },
                   */
    });
  }
});

// stop slider on mouseenter
// defaultSlider.el.addEventListener('mouseenter', () => {
//    defaultSlider.autoplay.stop();
// });
// defaultSlider.el.addEventListener('mouseleave', () => {
//    defaultSlider.autoplay.start();
// });
