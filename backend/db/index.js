const mongoose = require('mongoose');
const CONNECTION_STRING = process.env.CONNECTION_STRING || process.env.CONNECTIONSTRING;

mongoose.connect(CONNECTION_STRING)
  .then(() => console.log('Connection successful'))
  .catch(err => console.log('Connection failed', err));

mongoose.Promise = global.Promise;

module.exports = mongoose.connection;
