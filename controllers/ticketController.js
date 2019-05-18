const Ticket = require('../models/ticket');

// Create and save a new ticket
function save(req, res) {
  const { name } = req.body;
  const { surname } = req.body;
  const { numPeople } = req.body;
  const { price } = req.body;
  const { description } = req.body;
  const { isTrain } = req.body;

  // Checks if the ticket already exist
  Ticket.findOne({ surname }, (err, ticketExist) => {
    if (err) return res.status(500).send({ message: `Error finding ticket ${err}` });

    const ticket = new Ticket({
      name,
      numPeople,
      price,
      surname,
      description,
      isTrain,
    });

    // Save the new user
    ticket.save((error, newTicket) => {
      if (error) return res.status(500).send({ message: `Error saving ticket ${error}` });
      if (!newTicket) return res.status(500).send({ message: 'No ticket to save' });

      return res.status(200).send({ message: 'Saved' });
    });
    return true;
  });
}


// Get user object
function getAll(req, res) {
  Ticket.find({}, (err, tickets) => {
    if (err) return res.status(500).send({ message: `Error on request: ${err}` });
    if (!tickets) return res.status(404).send({ message: `No ticket found: ${err}` });

    return res.status(200).send(tickets);
  });
}

// Get user object by ID
function getOne(req, res) {
  const { ticketId } = req.params;

  Ticket.find({ surname: ticketId }, (err, ticket) => {
    if (err) return res.status(500).send({ message: `Error on request: ${err}` });
    if (!ticket) return res.status(404).send({ message: `No ticket found: ${err}` });

    return res.status(200).send([ticket]);
  });
}

module.exports = {
  save,
  getAll,
  getOne,
};
