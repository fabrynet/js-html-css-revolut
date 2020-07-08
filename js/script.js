$(document).ready(function(){
  // comparsa dropdown menu al passaggio del mouse
  $(".parent-dropdown").mouseenter(function(){
    $(this).children('.dropdown').toggle();
  });
  $(".parent-dropdown").mouseleave(function(){
    $(this).children('.dropdown').toggle();
  });
  // comparsa dell'hamburger menu al click sull'icona
  $(".button-hamburger-menu").click(function(){
    $('.header-hamburger-menu').fadeIn('slow',function(){
      $('.header-hamburger-menu').addClass('active')
    });
  });
  $(".close-hamburger-menu").click(function(){
    $('.header-hamburger-menu').fadeOut('slow',function(){
      $('.header-hamburger-menu').removeClass('active')
    });
  });
  // console.log($(window).width());
  // $(window).resize(function(){
  //   var viewport = $(window).width();
  //   // comparsa menu dropdown al passaggio del mouse con viewport > 1023px
  //   if (viewport > 1023) {
  //     $(".parent-dropdown").mouseenter(function(){
  //       $(this).children('.dropdown').toggle();
  //     });
  //     $(".parent-dropdown").mouseleave(function(){
  //       $(this).children('.dropdown').toggle();
  //     });
  //     // comparsa menu hamburger al click del mouse con viewport < 1023px
  //   } else {
  //     $(".button-hamburger-menu").click(function(){
  //       $('.header-hamburger-menu').fadeIn('slow',function(){
  //         $('.header-hamburger-menu').addClass('active')
  //       });
  //     });
  //     $(".close-hamburger-menu").click(function(){
  //       $('.header-hamburger-menu').fadeOut('slow',function(){
  //         $('.header-hamburger-menu').removeClass('active')
  //       });
  //     });
  //   }
  // });
});
