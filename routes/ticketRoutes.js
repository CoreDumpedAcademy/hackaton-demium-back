const express = require('express');
const ticketController = require('../controllers/ticketController');

const api = express.Router();


api.post('/save', ticketController.save);
api.get('/all', ticketController.getAll);
api.get('/:ticketId', ticketController.getOne);


module.exports = api;
