var elements = document.querySelectorAll('input, textarea');

function checkValidity() {};

for (i=0; i<elements.length; i++) {
  (function(element) {
    var id = element.getAttribute('id');
    element.value = localStorage.getItem(id); // обязательно наличие у элементов id
    element.oninput = function() {
      localStorage.setItem(id, element.value);
      checkValidity();
    };
  })(elements[i]);
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
