$( document ).ready(function() {

  var check = true;

  $('#formbtn').on('click', function() {
    if ($('#fname').val() == '') {
      $('#fname').addClass('contact__input-error');
      check = false;
    }
    if ($('#lname').val() == '') {
      $('#lname').addClass('contact__input-error');
      check = false;
    }
    if ($('#email').val() == '') {
      $('#email').addClass('contact__input-error');
      check = false;
    }
    if ($('#message').val() == '') {
      $('#message').addClass('contact__input-error');
      check = false;
    }
    if (check == true) {
      sendAjaxForm();
    }
  });

  $('#fname').on('click', function() { 
    if ($('#fname').hasClass('contact__input-error')) {
      $('#fname').removeClass('contact__input-error');
      check = true;
    }
  });

  $('#lname').on('click', function() { 
    if ($('#lname').hasClass('contact__input-error')) {
      $('#lname').removeClass('contact__input-error');
      check = true;
    }
  });

  $('#email').on('click', function() { 
    if ($('#email').hasClass('contact__input-error')) {
      $('#email').removeClass('contact__input-error');
      check = true;
    }
  });

  $('#message').on('click', function() { 
    if ($('#message').hasClass('contact__input-error')) {
      $('#message').removeClass('contact__input-error');
      check = true;
    }
  });

  function sendAjaxForm() {
    console.log('Отправка');
    $.ajax({
        url: '../mail.php',
        type: "POST",
        dataType: "html",
        data: $("#form").serialize(), 
        success: function(response) {
        	console.log('Данные отправленны');
      	},
    	  error: function(response) { 
          console.log('Данные не отправленны');
    	  }
    });
  };
});