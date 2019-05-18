const express = require('express');
const trainController = require('../controllers/trainController');

const api = express.Router();

api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

api.get('/test', (req, res)=>{
    res.status(200).send({message: "All okay train"});
});
api.get('/getPrice/:from/:to/:people', (req, res)=>{
    var people = parseInt(req.params.people, 10);
    var price = 10;
    price *= people;
    res.status(200).send({ from: req.params.from, to: req.params.to,
         people: people, price: price});
});
/*
api.post('/signup', userController.signUp);
api.post('/login', userController.login);
api.put('/update/:userId', userController.updateUser);
api.get('/all', userController.getUsers);
api.get('/:userId', userController.getUser);*/

module.exports = api;
