var data = require("../data.json");

exports.addParagraph = function(req, res) {    
	// Your code goes here
	console.log(data);
	/*var newFriend = {
		"name": "Anonymous Friend",
		"description":"How did I add this person?",
		"imageURL":"http://lorempixel.com/500/500/people"
	}
	data["friends"].push(newFriend);*/
	res.render('confirmation', data);
 }