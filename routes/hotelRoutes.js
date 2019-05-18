const express = require('express');
const hotelController = require('../controllers/hotelController');

const api = express.Router();

api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

api.get('/test', (req, res)=>{
    res.status(200).send({message: "All okay hotel"});
});


api.get('/getPrice/:city/:people/:nights', hotelController.GetFinalPrice);



module.exports = api;
