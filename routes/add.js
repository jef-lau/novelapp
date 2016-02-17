var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	/*console.log(data);
	var newFriend = {
		"name": "Anonymous Friend",
		"description":"How did I add this person?",
		"imageURL":"http://lorempixel.com/500/500/people"
	}
	data["friends"].push(newFriend);*/
	res.render('add', data);
 }

exports.addParagraph= function(req, res) {    
	// Your code goes here
	console.log(data);
	/*var paragraph = $("#comment").text();
	var newFriend = {
		"name": paragraph,
		"description":"How did I add this person?",
		"imageURL":"http://lorempixel.com/500/500/people"
	}
	data["friends"].push(newFriend);*/
	var name = req.query.paragraph;
	var friends = data['friends'];
	var id = count(friends);
	var newFriend = {
		"id": id,
		"name": name,
		"votes": 0
	}
	data["friends"].push(newFriend);
	console.log(data["friends"]);
	res.render('confirmation', data);
 }

function count(obj) {
   var count=0;
   for(var prop in obj) {
       count++;
   }
   return count;
}






