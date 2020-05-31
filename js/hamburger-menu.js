$(document).ready(main);

var contador = 1;

function main(){
    $('.hamburger').click(function(){
        //$('.header-nav').toggle();

        if(contador == 1){
            $('.header-nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('.header-nav').animate({
                left: '-100%'
            });  
        }

    });
};

var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
  $hamburger.toggleClass("is-active");
});