const express = require('express');
const socialNetController = require('../controllers/socialNetController');

const api = express.Router();


api.get('/find/:name', socialNetController.getSocial);
api.get('/all', socialNetController.getSocials);
api.post('/save', socialNetController.saveSocial);
api.put('/update/:name', socialNetController.updateSocial);
api.delete('/delete/:name', socialNetController.deleteSocial);


module.exports = api;