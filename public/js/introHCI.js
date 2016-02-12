'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	/*$('.project a').click(function(e){
		console.log($.get('/project/:idNumber', addProjectDetails));
	});*/
	$('#voteBtn').click(upVote);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);
	$.get('/project/'+idNumber, callBack);
	//console.log('/project/'+idNumber);
}

/*
 * Make an AJAX call to retrieve a color palette for the site
 * and apply it
 */
function upVote(e) {
	console.log("User clicked on vote button");
	$.get('/data/', voteCallBack);
}

function callBack(result){
	console.log(result);
	var id = "#"+"project"+result['id']+" .details";
	var htmlPage = 
	 '<img src="' + result['image'] + '"class="detailsImage">' +
	 '<h3>' + result['date'] + '</h3>' +
	 '<p><small>' + result['summary'] + '</small></p>'; 
	$(id).html(htmlPage);
}

function voteCallBack(result){
	/*var array = result['colors'];
	var colors = array['hex'];
	console.log(colors);
	$('body').css('background-color', colors[0]);
	$('.thumbnail').css('background-color', colors[1]);
	$('h1, h2, h3, h4, h5, h5').css('color', colors[2]);
	$('p').css('color', colors[3]);
	$('.project img').css('opacity', .75);*/
	var friends = result['friends'];
	var person = friends[0];
	//person['votes']++;
	console.log(person['votes']);	
}







