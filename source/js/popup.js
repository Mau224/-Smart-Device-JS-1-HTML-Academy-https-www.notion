'use strict';

if (window.localStorage) {
  var elements = document.querySelectorAll('[name]');

  for (var i = 0, length = elements.length; i < length; i++) {
    (function(element) {
      var name = element.getAttribute('name');

      element.value = localStorage.getItem(name) || '';

      element.onkeyup = function() {
        localStorage.setItem(name, element.value);
      };
    })(elements[i]);
  }
}


$(document).ready(function($) {
  $('.popup-open').click(function() {
    $('.popup-fade').fadeIn();
    return false;
  });

  $('.popup-close').click(function() {
    $(this).parents('.popup-fade').fadeOut();
    return false;
  });

  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.popup-fade').fadeOut();
    }
  });

  $('.popup-fade').click(function(e) {
    if ($(e.target).closest('.popup').length == 0) {
      $(this).fadeOut();
    }
  });
});
