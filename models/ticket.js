const mongoose = require('mongoose');

const { Schema } = mongoose;

const ticketSchema = new Schema({
  name: { type: String, required : true },
  surname: { type : String, required : true},
  adults: { type : Number, required : true, default : 0 },
  children: { type : Number, default : 0 },
  price : { type : Number, required : true, default : 0 },
  from: { type : String, default : null },
  to: { type : String, default : null },
  city: { type : String, default : null },
  isTrain: { type : Boolean }
});

module.exports = mongoose.model('ticket', ticketSchema);
