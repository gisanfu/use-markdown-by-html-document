$(document).ready(function() {
	converter = new Showdown.converter();
	text = converter.makeHtml($('#markdown').text());
	$('<div id="markdowned">' + text + '</div>').insertAfter($('#markdown'));
	$('#markdown').hide();
});
