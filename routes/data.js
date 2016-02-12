// Get all of our friend data
var data = require('../data.json');

exports.incrementVote = function(req, res){
	//console.log(data);
	var friends = data['friends'];
	var person = friends[0];
	person['votes']++;
	res.json(data);
};