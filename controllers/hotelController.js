
const hotels = require ('../hoteles.json');


function GetFinalPrice (req, res){
    const city = req.params.city;
    let adults = req.params.adults;
    let children = req.params.children;
    let nights = req.params.nights;

    let cityHotels = hotels[city.toLowerCase()];
    if(!cityHotels)
        return res.status(404).send({msg: "City not found"});

    adults = parseInt(adults, 10);
    children = parseInt(children, 10);
    nights = parseInt(nights, 10);
    if(isNaN(adults) || isNaN(children) || isNaN(nights) || adults < 1 || nights < 1)
        return res.status(400).send({msg: "adults and nights parameters must be integers and greater than 0"});

    let listHotels = {};
    let price;
    for(const hotel in cityHotels) {
        price = cityHotels[hotel] * adults * nights + Math.floor(cityHotels[hotel] * children * nights * 0.5);
        listHotels[hotel] = price
    }

    res.status(200).send({
        prices: listHotels,
        adults: adults,
        children: children,
        nights: nights,
        city: city
    });
}
   
module.exports = {
    GetFinalPrice
};
