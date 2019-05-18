const trains = require('../viajes.json');

function getPriceFromTo(request, response){
    const from = request.params.from;
    const to = request.params.to;
    let people = request.params.people;

    let trainsFrom = trains[from];
    if(!trainsFrom)
        return response.status(404).send({msg: "origin place not found"});

    let price = trainsFrom[to];
    if(!price)
        return response.status(404).send({msg: "destiny place not found"});

    people = parseInt(people, 10);
    console.log(people);
    if(isNaN(people) || people < 1)
        return response.status(404).send({msg: "people parameter most be a number and greater than 0"});

    price *= people;
    return response.status(200).send({
        from: from,
        to: to,
        people: people,
        price: price
    });
}

module.exports = {
    getPriceFromTo
};
