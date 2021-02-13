$(function(){
    $('#burger').click(function (event) {
        $('.header__burger, .header__burger-span, .header__nav').toggleClass('active');
        $('body').toggleClass('lock');
    });

    var sliderService = new Swiper('.service-slider ', {
  // Optional parameters
  
  
  loop: true,

  
  // Navigation arrows
  navigation: {
    nextEl: '.service__button-next',
    prevEl: '.service__button-prev',
  },

  breakpoints: {
    1500:{
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 37,
    },
    1200: {
        centeredSlides: true,
        slidesPerView: 3, 
        spaceBetween: 20,
        
       
    },
    992: {
        slidesPerView: 2,
        spaceBetween: 20,
       
        centeredSlides: false,
       
        
        
    },
    767: {
        slidesPerView: 1,
        
    },
  },

  
});


var sliderClients = new Swiper('.clients-slider ', {
  // Optional parameters
  
 
  loop: true,
 

  // Navigation arrows
  navigation: {
    nextEl: '.clients__button-next',
    prevEl: '.clients__button-prev',
  },

   breakpoints: {
    1500:{
        slidesPerView: 2,
        spaceBetween: 37,
    },
    1200: {
        slidesPerView: 1, 
        
        
       
    },
    992: {
        slidesPerView: 1,
        spaceBetween: 20,
       
        centeredSlides: false,
       
        
        
    },
    767: {
        slidesPerView: 1,
        
    },
  },

  
});



});