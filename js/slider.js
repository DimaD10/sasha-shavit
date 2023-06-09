const filter = new Swiper('.filter-slider', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,

    breakpoints: {
        // when window width is >= 320px
        320: {
          spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
          spaceBetween: 20
        }
      }
});

const featured = new Swiper('.featured-slider', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,

    breakpoints: {
        // when window width is >= 320px
        320: {
          spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
          spaceBetween: 20
        }
      }
});