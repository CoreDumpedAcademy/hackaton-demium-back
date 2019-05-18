const mongoose = require('mongoose');

const { Schema } = mongoose;

const socialNetSchema = new Schema({
  name: { type: String, required : true },
  link: { type: String, required: true},
  icon: String
});

module.exports = mongoose.model('socialNet', socialNetSchema);
