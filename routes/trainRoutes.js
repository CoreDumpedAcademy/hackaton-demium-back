const express = require('express');
const trainController = require('../controllers/trainController');

const api = express.Router();

api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

api.get('/:from/:to/:people', trainController.getPriceFromTo);

module.exports = api;
