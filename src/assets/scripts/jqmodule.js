(function() {
	'use strict';

	$(document).ready(init);

	function init() {
		$('#test').on('click', buttonClickHandler);
	}

	function buttonClickHandler(event) {
		console.log(event);
		alert('You clicked me!!!');
	}

})();
