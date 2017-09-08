var express = require('express');
var controller = require('./controller/controller');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(cors());
app.use(bodyParser.json());

controller(app);

app.listen(process.env.PORT || 3000, function(){
	console.log("The connection is working fine...");
});
