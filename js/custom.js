/*global $, alert, console*/
$(function () {
  'use strict';

  // FORM VALIDATION
  $('.plur-me').blur(function () {
    if($(this).val().length < 5){
      $(this).css('border', '2px solid #f00');
      $(this).parent().find('.alerts').fadeIn(50);
      $(this).parent().find('.fa-check-circle').fadeOut(50);

    }else{
      $(this).css('border', '2px solid #5cb85c');
      $(this).parent().find('.alerts').fadeOut(50);
      $(this).parent().find('.fa-check-circle').fadeIn(50);
    }
  });
  $('.emails').blur(function () {
    if($(this).val() === ''){
      $(this).css('border', '2px solid #f00');
      $(this).parent().find('.alerts').fadeIn(50);
      $(this).parent().find('.fa-check-circle').fadeOut(50);

    }else{
      $(this).css('border', '2px solid #5cb85c');
      $(this).parent().find('.alerts').fadeOut(50);
      $(this).parent().find('.fa-check-circle').fadeIn(50);

    }
  });

  // SHOW PASSWORD
  var passwordShow = $('.password');
  $('.show').hover(function () {
    passwordShow.attr('type', 'text');
  }, function () {
    passwordShow.attr('type', 'password');
  });

  // PASSWORD STRENGTH 
  $('#password').pwstrength({
    ui: { showVerdictsInsideProgressBar: true }
  });
});
