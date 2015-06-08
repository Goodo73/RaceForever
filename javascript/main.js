$(document).ready(function() {
	// call new page function (0)
	newPage(0);

	$('#buttons-inner').on('click', '.button', function() {
		// display new page
		newPage($(this).data('page'));
	});
});

function newPage (pageNbr) {
	displayPage(pages[pageNbr],pageNbr);
}

function displayPage (page,pageNbr) {
	var $btnsInner = $('#buttons-inner');

	$btnsInner.empty();

	$('#page-text').html(page.text);
	
	if (pageNbr > 0) {
		$('#page-number').html('Page ' + pageNbr);
	}

	var options = page.options;

	if (options.length === 0) {
		$btnsInner.append(createButton(0, 'Start again'));
	} else {
		for (var i = 0; i < options.length; i++) {
			var button = createButton(options[i].nextPageNbr, options[i].shortDescription);

			$btnsInner.append(button);
		};
	}
}

function createButton (pageNbr,description) {
	return $('<div>').attr('class','button').html(description).data('page',pageNbr);
}
