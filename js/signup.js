$(document).ready(function() {
  var $email = $('#inputEmail');
  var $password = $('#inputPassword');
  var $checkbox = $('#inputCheckbox');

  // asociando eventos a los inputs

  $email.on('input', function(event) {
    console.log(event.target.value);
    console.log($(this).val());
    var PATTERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    console.log(PATTERNEMAIL.test($(this).val()));
  });

  $password.on('input', function(event) {
    /* var PATTERNPASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
      console.log(PATTERNPASSWORD.test() */
    if ($(this).val().length >= 6) {
      alert('cumple');      
    } else {
      alert('no cumple');
    }
  });
  $checkbox.on('input', function(event) {
      
  }
});