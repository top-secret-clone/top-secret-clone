var mongoose = require('mongoose');


var Form = new mongoose.Schema({
  name: {type: String},
  email: {type: String, index: true, trim: true},
  phone: {type: String},
  project: {type: String}
});

module.exports = mongoose.model('Form', Form);
