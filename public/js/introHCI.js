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
	$('.thumbnail button').click(upVote);
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
	e.preventDefault();

	var projectID = $(this).closest('.voteButton').attr('id');
	console.log("projectID = "+projectID);
	$.get('/data/'+projectID, voteCallBack);
}




/* 
 * call back functions
 */
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
	var votes = result['votes'];
	var id = result['id'];
	console.log(votes);	
	if (votes == 10) {
		console.log("10 votes reached");
		// call pilk
		$.get('/pilk/'+id, tenCallBack);
	} else {
		console.log(id);
	}	
}

function tenCallBack(result){


}









