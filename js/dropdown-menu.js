$(document).ready(function(){

  $(".menu-item").hover(function(){
    $(this).find(".dropdown-list").toggleClass("dropdown-menu");
  });
  
});