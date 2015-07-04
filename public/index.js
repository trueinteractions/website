window.addEventListener('load', function() {
  $('.ui.form')
    .form({
      emailAddress: {
        identifier: 'EMAIL',
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

  $('.ui.accordion')
    .accordion('toggle');

  // Keep copyright year up-to-date;
  $('.copyright-to-date').text(function() {
    return new Date().getFullYear();
  }());
});
