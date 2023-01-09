
window.onscroll = () => scrollHeader();

const scrollHeader = () => {
    if (document.documentElement.scrollTop > 10 || document.body.scrollTop > 10) {
        document.querySelector('header').classList.add('header-fixed')
    } else {
        document.querySelector('header').classList.remove('header-fixed')
    }
}

const swiper = new Swiper(".mySwiper", {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
});


const swiperTwo = new Swiper(".secondSwiper", {
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    slideToClickedSlide:true,
    mousewheel: {
        invert: true,
    },
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },

    breakpoints: {
        // when window width is >= 320px
        // 320: {
        //   slidesPerView: 1,
        //   spaceBetween: 20
        // },
        // when window width is >= 480px
        0: {
            slidesPerView: 1,
            //   spaceBetween: 30
        },
        // when window width is >= 640px
        576: {
            slidesPerView: 2,
            // spaceBetween: 40
        },
        1024: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 3,
        }
    }
});


