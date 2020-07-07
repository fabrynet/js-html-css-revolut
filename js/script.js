// comprsa menu dropdown al passaggio del mouse
$(document).ready(function(){
  $(".parent-dropdown").mouseenter(function() {
    $(this).children('.dropdown').toggle();
  });
  $(".parent-dropdown").mouseleave(function() {
    $(this).children('.dropdown').toggle();
  });
});
