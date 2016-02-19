// Get all of our friend data
var data = require('../data.json');
var crown = require('../pilcrows.json');

exports.view = function(req, res){

	var pilcrows = crown['crowned'];
	var pilcrowsCount = count(pilcrows);
	crown["pilcrowSize"] = pilcrowsCount + 1;
	console.log("pilcrowscount = "+pilcrowsCount);

	res.render('pilcrow', crown);
};

function count(obj) {
   var count=0;
   for(var prop in obj) {
       count++;
   }
   return count;
}