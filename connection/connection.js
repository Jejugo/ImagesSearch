var mongoose = require('mongoose');
//ES6 Promises
mongoose.Promise = global.Promise;

module.exports = function(){
	mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/searchVal", { useMongoClient: true });
	mongoose.connection.once('open', function(){
		console.log("Connection has been made, now make fireworks!");
	}).on('error', function(error){
		console.log("Connection error: ", error);
	});;	
}