const trains = require('../viajes.json');

function getPriceFromTo(request, response){
    const from = request.params.from;
    const to = request.params.to;
    let adults = request.params.adults;
    let children = request.params.children;

    let trainsFrom = trains[from.toLowerCase()];
    if(!trainsFrom)
        return response.status(404).send({msg: "origin place not found"});

    let cityTrains = trainsFrom[to.toLowerCase()];
    if(!cityTrains)
        return response.status(404).send({msg: "destiny place not found"});
        
    adults = parseInt(adults, 10);
    if(isNaN(adults) || adults < 1)
        return response.status(404).send({msg: "adults parameter must be a number and greater than 0"});

    children = parseInt(children, 10);
    if(isNaN(children))
        return response.status(404).send({msg: "children parameter must be a number"});

    // price = adults * price + Math.floor(children * price * 0.5);

    let listTrain = {};
    let price;
    for(const train in cityTrains) {
        price = cityTrains[train] * adults + Math.floor(cityTrains[train] * children * 0.5);
        listTrain[train] = price;
    }

    return response.status(200).send({
        from: from,
        to: to,
        adults: adults,
        children: children,
        price: listTrain,
    });
}

module.exports = {
    getPriceFromTo
};
