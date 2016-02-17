var data = require('../data.json');
var crown = require('../pilcrows.json');

exports.crownVictor= function(req, res) {    
	// Your code goes here
	console.log(data);
	var obj = data["friends"];
	var winningID = 1;

	var winner = {
		"name": obj[winningID].name,
		"vote": obj[winningID].vote
	}
	crown["crowned"].push(winner);	
	res.render('', crown);	

 }