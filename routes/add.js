var data = require("../data.json");
var crown = require("../pilcrows.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	/*console.log(data);
	var newFriend = {
		"name": "Anonymous Friend",
		"description":"How did I add this person?",
		"imageURL":"http://lorempixel.com/500/500/people"
	}
	data["friends"].push(newFriend);*/
	res.render('add', crown);
 }

exports.addParagraph= function(req, res) {    
	// Your code goes here
	console.log(data);



	//<!-- pushes winner to new json -->


	// console.log(data);
	// var obj = data["friends"];
	// var winningID = 1;
	
	// var winner = {
	// 	"name": obj[winningID].name,
	// 	"vote": obj[winningID].vote
	// }
	// crown["crowned"].push(winner);	

	
	/*var paragraph = $("#comment").text();
	var newFriend = {
		"name": paragraph,
		"description":"How did I add this person?",
		"imageURL":"http://lorempixel.com/500/500/people"
	}
	data["friends"].push(newFriend);*/
	var name = req.query.paragraph;
	var friends = data['friends'];
	var penname = req.query.usr;
	var id = count(friends);
	var newFriend = {
		"id": id,
		"name": name,
		"penname": penname,
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






