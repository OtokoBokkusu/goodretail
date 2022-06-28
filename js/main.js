$( document ).ready(function() {
  $(window).scroll(function() {

    var target = $(this).scrollTop();
  
    if(target == 0) {
      if ($('.header').hasClass('header__active')) {
        $('.header').removeClass('header__active');
      }
    } else {
      $('.header').addClass('header__active');
    }
  
  });

  var image = document.getElementsByClassName('circle');
  new simpleParallax(image, {
    scale: 2,
    overflow: true
  }).refresh();

  AOS.init();

  $('.mobile__nav-icon').click(function(){
    $(this).toggleClass('open');
    $('.mobile-menu').toggleClass('display');
  });

});



