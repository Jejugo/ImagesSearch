var express = require('express');
var bodyParser = require('body-parser');
var Bing = require('node-bing-api')({accKey: "7404e26042894022be3bbb85a56870d4"});
var searchValue = require('../models/searchVal');
var connections = require('../connection/connection');

//connecting with database
connections();

module.exports = function(app){
	
	app.get('/api/imagesearch/:searchVal', function(req, res){
		var searchVal = req.params.searchVal;
		var offset = req.query.offset;

		Bing.images(searchVal, {
				count: 10,
				offset: offset
			}, function(err, rez, body){
				console.log("We are searching for... " + searchVal + " on page " + offset);
				var data = new searchValue({
					searchVal: searchVal,
					searchDate: new Date()
				});

				data.save(function(err){
					if(err){
						console.log("Error saving in database");
					}
				})	
				res.json(body);
			});
		});

		app.get('/api/recentsearches', function(req, res){
			searchValue.find({}).limit(10).sort({searchDate: -1}).then(function(data){
				res.json(data);
			});
				
		});
}