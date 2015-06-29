window.addEventListener('load', function() {
	$('#menu').on('click', function() {
		$('.left.sidebar').sidebar('toggle');
	});

	$('.checkbox').checkbox();

  $('.ui.form')
    .form({
      emailAddress: {
        identifier: 'email-address',
        rules: [
          {
            type: 'email',
            prompt: 'Please enter a vaild email address'
          }
        ]
      }
    }, {
      inline: true
    });
});
