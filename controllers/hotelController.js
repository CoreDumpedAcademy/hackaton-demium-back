
const hotel = require ('../hoteles.json');


function GetFinalPrice (req, res){
    const city = req.params.city;
    const people = req.params.people;
    const nights = req.params.nights;
    
    var price = hotel[city.toLowerCase()]

    price.forEach(element => {
        element.price
    });()
    price *= people * nights;
    res.status(200).send({
        price: price,
        people: people,
        nights: nights
    });
}
   
    module.exports = {
        GetFinalPrice
    }
