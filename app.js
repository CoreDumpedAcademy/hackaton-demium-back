const bodyParser = require('body-parser');
const express = require('express');
const hotelRoutes = require('./routes/hotelRoutes');
const trainRoutes = require('./routes/trainRoutes');
const socialNetRoutes = require('./routes/socialNetRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

const app = express();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', ['Content-Type', '*'])
    next();
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/hotel', hotelRoutes);
app.use('/train', trainRoutes);
app.use('/socialNet', socialNetRoutes);
app.use('/tickets', ticketRoutes)


module.exports = app;
