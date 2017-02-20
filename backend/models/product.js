var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema =  new Schema({ 
    title: String, 
	author: String, 
    pictureUri: String,
	resume: String
})

module.exports = mongoose.model('Product', ItemSchema);
