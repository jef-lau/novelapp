var data = require('../data.json');
var crown = require('../pilcrows.json');

exports.crownVictor= function(req, res) {    
	// Your code goes here
	console.log(data);
	var obj = data["friends"];
	var projectID = req.params.id;
	var winningID = projectID;

	var winner = {
		"name": obj[winningID].name,
		"vote": obj[winningID].vote,
		"penname": obj[winningID].penname
	}
	crown["crowned"].push(winner);	
	console.log("before deleting data[friends] ="+data["friends"]);
	data["friends"] = [];
	console.log("after deleting data[friends] = "+data["friends"]);

	res.json(data);

 }