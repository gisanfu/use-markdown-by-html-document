$(document).ready(function() {
	converter = new Showdown.converter();

	$('textarea').each(function(index){
		text = converter.makeHtml($(this).text());
		$('<div id="markdowned' + index + '">' + text + '</div>').insertAfter($(this));
		$(this).hide();
	});

});
