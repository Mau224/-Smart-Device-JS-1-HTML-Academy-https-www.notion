'use strict';
$(function () {
  $('#phone').mask('8(999) 999-99-99');
});

$(document).ready(function () {
  $('.block__title').click(function (event) {
    $(this).toggleClass('active').next().slideToggle(300);
  })
})
