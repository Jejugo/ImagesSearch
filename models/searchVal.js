const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchValSchema = new Schema({
	searchVal: String,
	searchDate: Date
}, {timestamp: true});

const searchVal = mongoose.model('searchval', searchValSchema);

module.exports = searchVal;



