

// Happy Section Carousel
const realEstate = new Swiper(".real-estate", {
  slidesPerView: 1,
  direction: "horizontal",
  spaceBetween: 30,
  initialSlide: 3,
  navigation: {
    nextEl: ".custom-happy-swiper-button-next",
    prevEl: ".custom-happy-swiper-button-prev",
  },

  breakpoints: {
    1024: {
        slidesPerView: 2.1,
        spaceBetween: 100,
    },
    
   
  },
});
// End Happy Section Carousel

// Infite Slider for Footer Section
const footerSwiper = new Swiper(".footer-swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 2000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  allowTouchMove: false,

  breakpoints: {
    640: {
      slidesPerView: 1.5,
    },

    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 5,
    },

    1248: {
      slidesPerView: 3.7,
    },
  },
});
// End Infinite Slider for Footer Section



// Closing and Opening hamburger menu
const hamburgerOpen = document.querySelector('#hamburger-open');
const hamburgerClose = document.querySelector('#hamburger-close');
const hamburgerMenu = document.querySelector('.hamburger-menu');

function openCloseHamburgerMenu(status) {
    if (status === 'open') {
        hamburgerMenu.classList.add('hamburger-menu-active');
    } else if (status === 'close') {
        hamburgerMenu.classList.remove('hamburger-menu-active');
    }
}

hamburgerOpen.addEventListener('click', () => {
    openCloseHamburgerMenu('open');
});

hamburgerClose.addEventListener('click', () => {
    openCloseHamburgerMenu('close');
});