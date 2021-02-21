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

var modalButton = $('[data-toggle=modal]');
var closeModalButton = $('.button-close');
modalButton.on('click', openModal);
closeModalButton.on('click', closeModal);


function openModal() {
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  modalOverlay.addClass('modal__overlay--visible');
  modalDialog.addClass('modal__dialog--visible');
  $('html').addClass('hystmodal-opened');
}

function closeModal() {
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  modalOverlay.removeClass('modal__overlay--visible');
  modalDialog.removeClass('modal__dialog--visible');
  $('html').removeClass('hystmodal-opened');
}


// проверка на пустоту заполненных полей
$('.form-modal').submit(function(){
  if(document.forms.email.value == '' || document.form.password.value == ""){
    valid = false;
    return valid;
  } else{
    closeModal();
  }
});

// Закрытие на esc
$(document).keydown(function (e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
      closeModal()
    }
  });

 $('.modal__overlay').on('click', closeModal); 
 



});