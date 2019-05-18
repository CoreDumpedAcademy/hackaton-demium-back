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
/*api.get('/getPrice/:city/:people/:nights', (req, res)=>{
    var people = parseInt(req.params.people, 10);
    var nights = parseInt(req.params.nights, 10);
    var price = 10;
    price *= people * nights;

    res.status(200).send({ city: req.params.city, people: req.params.people, 
        nights: req.params.nights, price: price });
});*/

api.get('/getPrice/:city/:people/:nights', hotelController.GetFinalPrice);

/*api.post('/signup', userController.signUp);
api.post('/login', userController.login);
api.put('/update/:userId', userController.updateUser);
api.get('/all', userController.getUsers);
api.get('/:userId', userController.getUser);
*/

module.exports = api;
