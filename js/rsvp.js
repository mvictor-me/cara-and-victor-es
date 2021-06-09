(function($) {

  // rsvp button.
  $('#rsvp-submit').click(function() {
    var name = $('#rsvp-name').val();
    var email = $('#rsvp-email').val();

    if (name == "" || email == "") {
      var msg = '<strong>Please type your name and email</strong>';
      var rsvp_message = $('#rsvp-message');
      rsvp_message.removeClass('has-background-primary-light').addClass('has-background-danger-light');
      rsvp_message.fadeTo(300, 1).html(msg).delay(5000).fadeTo(400, 0);
    } else {
      $("#mG61Hd").submit();
      $("#mG61Hd")[0].reset();
    }
  });

  // submit form
  $("#mG61Hd").submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "https://docs.google.com/forms/d/e/1FAIpQLScyO8JorftSUacVOvK7B5NZSkdnhwNFY-PXyhE01NLxoESzaA/formResponse",
      data: $(this).serialize(),
      dataType: "json",
      statusCode: {
        0: function() {
          var msg = "<strong>RSVP registered, Thank you!</strong>";
          var rsvp_message = $('#rsvp-message');
          rsvp_message.removeClass('has-background-danger-light').addClass('has-background-primary-light');
          rsvp_message.fadeTo(300, 1).html(msg).delay(5000).fadeTo(400, 0);
        },
        200: function() {
          var msg = "<strong>RSVP registered, Thank you!</strong>";
          var rsvp_message = $('#rsvp-message');
          rsvp_message.removeClass('has-background-danger-light').addClass('has-background-primary-light');
          rsvp_message.fadeTo(300, 1).html(msg).delay(5000).fadeTo(400, 0);
        },
        403: function() {
          var msg = "<strong>An unexpected error has occurred</strong>";
          var rsvp_message = $('#rsvp-message');
          rsvp_message.removeClass('has-background-primary-light').addClass('has-background-danger-light');
          rsvp_message.fadeTo(300, 1).html(msg).delay(5000).fadeTo(400, 0);
        },
      }
    });
  });

})(jQuery);
