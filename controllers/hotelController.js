
const hotel = require ('../hoteles.json');


function GetFinalPrice (req, res){
    const city = req.params.city;
    const people = req.params.people;
    const nights = req.params.nights;
    
    var price = hotel[city.toLowerCase()]

    for (var key in price) {
        for (var money in price[key]) {
            price[key][money]= price[key][money] * people * nights;
        }
    }

    res.status(200).send({
        price: price,
        people: people,
        nights: nights,
        city: city
    });
}
   
    module.exports = {
        GetFinalPrice
    }
