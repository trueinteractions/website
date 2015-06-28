window.addEventListener('load', function() {
	$('#menu').on('click', function() {
		$('.left.sidebar').sidebar('toggle');
	});

	$('.checkbox').checkbox();

  $('.ui.form').form({
    email: {
      identifier: 'email-address',
      rules: [
        {
          type: 'empty',
          prompt: 'Please enter your email address'
        },
        {
          type: 'email',
          prompt: 'Please enter a valid email address'
        }
      ]
    }
  })
});
