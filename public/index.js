window.addEventListener('load', function() {
	$('#menu').on('click', function() {
		$('.left.sidebar').sidebar('toggle');
	});
	$('.checkbox').checkbox();
});
