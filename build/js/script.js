'use strict';
$(function () {
  $('#phone').mask('+7(999) 999-99-99');
  $('#tel').mask('+7(999) 999-99-99');
});

$(document).ready(function () {
  $('.block__title').click(function (event) {
    $(this).toggleClass('active').next().slideToggle(300);
  })
})

$(document).ready(function() {
  $("body").children().each(function() {
    $(this).html($(this).html().replace(/&#8232;/g," "));
  });
});
