var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Creating a new Schema Blueprint
// My Model will be based on this Blueprint
var schema = new Schema({
  imagePath : {
    type: String,
    required: true
  },
  title : {
    type: String,
    required: true
  },
  description : {
    type: String,
    required: true
  },
  price : {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Product', schema);
