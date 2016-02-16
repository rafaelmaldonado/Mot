var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var images = new Schema({
	user: String,
	phrase: String,
	likes: Number,
	category: String,
	image: String,
	date: String
});

module.exports = mongoose.model('Images', images);