//mongoose
var mongoose = require('mongoose');

//model rutas
var rutasSchema = mongoose.Schema({
	local:{
		user: String,
		time:	Date,
		lng:	Number,
		lat:	Number
	}
});
//exports
module.exports = mongoose.model('rutas', rutasSchema);