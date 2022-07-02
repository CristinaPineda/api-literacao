const mongoose = require('mongoose');
const dotenv = require('dotenv');;

dotenv.config();

const { KEY, URI } = process.env;

mongoose
  .connect(`${KEY}${URI}`, {
  })
  .catch((err) => {
    console.error(err);
  });

module.exports =  mongoose;