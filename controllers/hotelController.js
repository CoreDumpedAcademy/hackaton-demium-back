
const hotels = require ('../hoteles.json');


function GetFinalPrice (req, res){
    const city = req.params.city;
    let people = req.params.people;
    let nights = req.params.nights;

    let cityHotels = hotels[city.toLowerCase()];
    if(!cityHotels)
        return res.status(404).send({msg: "City not found"});

    people = parseInt(people, 10);
    nights = parseInt(nights, 10);
    if(isNaN(people) || isNaN(nights) || people < 1 || nights < 1)
        return res.status(400).send({msg: "people and nights parameters must be integers and greater than 0"});

    let listHotels = {};
    let price;
    for(const hotel in cityHotels) {
        price = cityHotels[hotel] * people * nights;
        listHotels[hotel] = price
    }

    res.status(200).send({
        prices: listHotels,
        people: people,
        nights: nights,
        city: city
    });
}
   
module.exports = {
    GetFinalPrice
};
