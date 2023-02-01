function swiperSlider() {
  const homeMain = document.querySelectorAll('[data-slider="home-slider"]');
  const detailsMain = document.querySelectorAll('[data-slider="details-slider"]');
  const roomMain = document.querySelectorAll('[data-slider="room-slider"]');

  if (homeMain) {
    homeMain.forEach(slider => {
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');
      //   let pagination = slider.querySelector('.swiper-pagination');
      const swiper = new Swiper(slider.querySelector('.swiper'), {
        // speed: 1500,
        // centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        // pagination: {
        //   el: pagination,
        //   clickable: true,
        //   renderBullet: function (index, className) {
        //     return '<li class="' + className + '"></li>';
        //   },
        // },

        loop: true,
        reverseDirection: false,
        
        slidesPerView: 1.3,
        spaceBetween: 25,
        
        breakpoints: {
          540: {
            slidesPerView: 2,
            spaceBetween: 40
          },

          1024: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 40
          }
        },

        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },
        on: {
          transitionStart: function () {
            let previousIndex = this.previousIndex;
            let previousSlide = slider.getElementsByClassName('swiper-slide')[previousIndex];
            if (previousSlide) {
              setTimeout(function () {
                previousSlide.classList.remove('is-play');
              }, 1000);
            }
          },
          transitionEnd: function () {
            let activeIndex = this.activeIndex;
            let activeSlide = slider.getElementsByClassName('swiper-slide')[activeIndex];
            activeSlide.classList.add('is-play');
          },
        },
      });
    });
  }

  if (detailsMain) {
    detailsMain.forEach(slider => {
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');
      //   let pagination = slider.querySelector('.swiper-pagination');
      const swiper = new Swiper(slider.querySelector('.swiper'), {
        // speed: 500,
        // centeredSlides: true,
        // autoplay: {
        // //   delay: 3000,
        //   disableOnInteraction: false,
        // },

        // pagination: {
        //   el: pagination,
        //   clickable: true,
        //   renderBullet: function (index, className) {
        //     return '<li class="' + className + '"></li>';
        //   },
        // },

        loop: true,

        slidesPerView: 1.3,
        spaceBetween: 20,
        
        breakpoints: {
        540: {
            slidesPerView: 2,
        },

        1024: {
          slidesPerView: 3,
          spaceBetween: 34
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 87
        }
        },


        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },
        on: {
          transitionStart: function () {
            let previousIndex = this.previousIndex;
            let previousSlide = slider.getElementsByClassName('swiper-slide')[previousIndex];
            if (previousSlide) {
              setTimeout(function () {
                previousSlide.classList.remove('is-play');
              }, 1000);
            }
          },
          transitionEnd: function () {
            let activeIndex = this.activeIndex;
            let activeSlide = slider.getElementsByClassName('swiper-slide')[activeIndex];
            activeSlide.classList.add('is-play');
          },
        },
      });
    });
  }

  if (roomMain) {
    roomMain.forEach(slider => {
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');
      //   let pagination = slider.querySelector('.swiper-pagination');
      const swiper = new Swiper(slider.querySelector('.swiper'), {
        speed: 1500,
        // centeredSlides: true,
        // autoplay: {
        // //   delay: 3000,
        //   disableOnInteraction: false,
        // },
        slidesPerView: 1,
        spaceBetween: 0,
        // pagination: {
        //   el: pagination,
        //   clickable: true,
        //   renderBullet: function (index, className) {
        //     return '<li class="' + className + '"></li>';
        //   },
        // },
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },
        on: {
          transitionStart: function () {
            let previousIndex = this.previousIndex;
            let previousSlide = slider.getElementsByClassName('swiper-slide')[previousIndex];
            if (previousSlide) {
              setTimeout(function () {
                previousSlide.classList.remove('is-play');
              }, 1000);
            }
          },
          transitionEnd: function () {
            let activeIndex = this.activeIndex;
            let activeSlide = slider.getElementsByClassName('swiper-slide')[activeIndex];
            activeSlide.classList.add('is-play');
          },
        },
      });
    });
  }
}
window.addEventListener('load', swiperSlider, false);
