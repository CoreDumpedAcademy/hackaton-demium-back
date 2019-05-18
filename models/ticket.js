const mongoose = require('mongoose');

const { Schema } = mongoose;

const ticketSchema = new Schema({
  name: { type: String, required : true },
  surname: { type : String, required : true},
  numPeople: { type : Number, required : true },
  price : { type : Number, required : true },
  description: { type : String, required : true},
  isTrain: { type : Boolean, required : true}
});

module.exports = mongoose.model('ticket', ticketSchema);
