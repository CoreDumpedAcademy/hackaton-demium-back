const mongoose = require('mongoose');

const { Schema } = mongoose;

const ticketSchema = new Schema({
  lastName: { type: String, required : true },
});

module.exports = mongoose.model('ticket', ticketSchema);
