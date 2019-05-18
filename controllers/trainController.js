const trains = require('../viajes.json');

function getPriceFromTo(request, response){
    const from = request.params.from;
    const to = request.params.to;
    const people = request.params.people;

    return response.status(200).send(trains)
}

module.exports = {
    getPriceFromTo
};
