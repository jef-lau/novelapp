// Get all of our friend data
var data = require('../data.json');
var crown = require('../pilcrows.json');

exports.view = function(req, res){
	console.log(data);
	// we need to fix this. we can only render 1 json at time
	res.render('index', crown);
	res.render('index', data);
};