$(document).ready(function(){

  $("ul").hover(function(){
    $(this).find(".dropdown-list").toggleClass("dropdown-menu");
  });
  
});