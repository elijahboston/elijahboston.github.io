// main.js

//$('#hello').height(window.innerHeight);

$('h1.open-content').click(function(event) {
	var parent = $(this).parent().parent('article'),
		child = parent.children('.content-container');

	if (parent.hasClass('active')) {
		// close
		parent.removeClass('active');
		child.css('height', '0');
	} else {
		// open

		// close all other tabs
		$('article').removeClass().children('.content-container').css('height','0');

		// open this tab
		parent.addClass('active');
		child.css('height', child.children('.content').innerHeight() + 40);
	}
});