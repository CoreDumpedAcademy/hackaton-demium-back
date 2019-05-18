const express = require('express');
const ticketController = require('../controllers/ticketController');

const api = express.Router();
/*
api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});*/

api.post('/save', ticketController.save);
api.get('/all', ticketController.getAll);
api.get('/:ticketId', ticketController.getOne);


module.exports = api;
