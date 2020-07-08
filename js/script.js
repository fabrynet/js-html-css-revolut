$(document).ready(function(){
  console.log($(window).width());
  var viewport = $(window).width();
  // comparsa menu dropdown al passaggio del mouse con viewport > 1023px
  if (viewport > 1023) {
    $(".parent-dropdown").mouseenter(function(){
      $(this).children('.dropdown').toggle();
    });
    $(".parent-dropdown").mouseleave(function(){
      $(this).children('.dropdown').toggle();
    });
    // comparsa menu hamburger al click del mouse con viewport < 1023px
  } else {
    $(".button-hamburger-menu").click(function(){
      $('.header-hamburger-menu').addClass('active');
    });
    $(".close-hamburger-menu").click(function(){
      $('.header-hamburger-menu').removeClass('active');
    });
  }
});
