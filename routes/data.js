// Get all of our friend data
var data = require('../data.json');

exports.incrementVote = function(req, res){
	//console.log(data);
	var projectID = req.params.id;
	var friends = data['friends'];
	var person = friends[projectID];
	person['votes']++;
	res.json(person);
};