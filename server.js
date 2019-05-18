const mongoose = require('mongoose');
const app = require('./app');

// use 'mongodb://localhost:27017/expressmongo' for development
const mongodb = process.env.MONGODB || 'mongodb://mongo:27017/expressmongo';
const port = process.env.PORT || 3000;


mongoose.connect(mongodb, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(`ERROR: connecting to Database. ${err}`);
  } else {
    console.log(`Connection to ${mongodb} was succesfull`);
    app.listen(port, () => {
      console.log(`Training RESTful API server started on: ${port}`);
    });
  }
});
