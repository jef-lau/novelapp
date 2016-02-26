// Get all of our friend data
var data = require('../data.json');
var crown = require('../pilcrows.json');

exports.view = function(req, res){

	var pilcrows = crown['crowned'];
	var pilcrowsCount = count(pilcrows);
	crown["pilcrowSize"] = pilcrowsCount + 1;
	console.log("pilcrowscount = "+pilcrowsCount);

	// we need to fix this. we can only render 1 json at time
	res.render('indexB', crown);
	// res.render('index', data);
};

function count(obj) {
   var count=0;
   for(var prop in obj) {
       count++;
   }
   return count;
}