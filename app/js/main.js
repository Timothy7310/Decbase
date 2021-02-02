$(function(){
    $('#burger').click(function (event) {
        $('.header__burger, .header__burger-span, .header__nav').toggleClass('active');
        $('body').toggleClass('lock');
    });

    var sliderService = new Swiper('.service-slider ', {
  // Optional parameters
  
  centeredSlides: true,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.service__button-next',
    prevEl: '.service__button-prev',
  },

  breakpoints: {
    1500:{
        slidesPerView: 3,
        spaceBetween: 37
    },
    1200: {
        slidesPerView: 3, 
        spaceBetween: 20
        
       
    },
    992: {
        slidesPerView: 2,
        spaceBetween: 20,
       
        centeredSlides: false,
       
        
        
    },
    767: {
        slidesPerView: 1
        
    },
  },

  
})

});