const bodyParser = require('body-parser');
const express = require('express');
const trainRoutes = require('./routes/trainRoutes');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/trains', trainRoutes);


module.exports = app;
