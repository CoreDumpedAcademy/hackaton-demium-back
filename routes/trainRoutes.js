const express = require('express');
const trainController = require('../controllers/trainController');
const myjson = require('../viajes.json');

const api = express.Router();


api.get('getPrice/:from/:to/:people', trainController.getPriceFromTo);

module.exports = api;
