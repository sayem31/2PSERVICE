$(document).ready(function(){
	/*$('.menu ul li a').click(function(){

        $('html,body').animate({
          scrollTop:$($(this).attr('href')).offset().top
        },1000);

        return false;
      });*/

  // Start Humber Main Menu Icon Js
  $('.all_p_humber').click(function(){
         $(this).toggleClass('open');
     });
  //==== End Humber Main Menu Icon Js


$('.all_p_humber').click(function(){
    $('.menu ul').slideToggle();
  });
  $('.menu ul li a').click(function(){
         $('.all_p_humber').removeClass('open');
     });
  $('.menu ul li a').click(function(){
         $('.menu ul').slideUp();
     });


});