const bodyParser = require('body-parser');
const express = require('express');
const hotelRoutes = require('./routes/hotelRoutes');
const trainRoutes = require('./routes/trainRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/hotel', hotelRoutes);
app.use('/train', trainRoutes);
app.use('/tickets', ticketRoutes)


module.exports = app;
