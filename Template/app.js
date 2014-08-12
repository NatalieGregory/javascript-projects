$(document).ready(function(){


  var button = $('.toggleModal');
  var modal = $('#modal');

  button.on('click', function() {
   modal.toggleClass('active');
  });

});



