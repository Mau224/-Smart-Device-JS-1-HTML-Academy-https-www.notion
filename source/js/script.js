'use strict';

$(function () {
  $('#phone').mask('+7(999) 999-99-99');
  $('#tel').mask('+7(999) 999-99-99');
});

$(document).ready(function () {
  $('.block__title').click(function (event) {
    if($('.footer__link-block').hasClass('one')) {
      $('.block__title').not($(this)).removeClass('active');
      $('.footer__list').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  })
})

