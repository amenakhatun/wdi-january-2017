// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function() {

    // Step 1: Listen to the click event on the link
	$('.robot > a').on('click', function(event) {
		
		// Step 2: Prevent default behaviour of clicking on a link
		event.preventDefault();
		
	    // Step 3: Make the Ajax Request
		var url = $(this).attr('href');
		$.ajax({
		    url: url,
		    method: 'GET',
			dataType: 'json'
		}).done(function(data) {
			// Step 4: Update the page
			
			// .html only works with HTML data, not JSON
			//$('#robot-details').html(data);
			
			var profilePicSrc = 'http://robohash.org/' + data.address
			$('<img>').attr('src', profilePicSrc).appendTo('#robot-details');
			
			// What I want to append is:
			// <p>Price: <strong>$123.45</strong></p>
			
			var priceString = '$' + (data.model_number / 100);
			var strongTag   = $('<strong>').html(priceString);
			var pTag        = $('<p>').html('Price: ').append(strongTag);
			
			pTag.appendTo('#robot-details');
		});
		
	});

});
