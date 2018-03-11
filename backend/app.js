const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
import {myAtlasConnection, connectionString } from './config';
import api from './routes';
import schema from './graphql/schemas';
import mongoose from 'mongoose';
import cors from 'cors';




mongoose.Promise = global.Promise;
const app = express();;
mongoose.connect(connectionString, function(err) {
  if(err) {
    console.log('Connection faild ', err);
  }
  console.log('Connection succeful');
});

app.use(cors());
// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql'}))


//app.use(bodyParser.json());

//Routes
app.use('/api', api);
app.use(express.static(path.resolve(__dirname, 'static')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
});

const PORT = process.env.PORT || 9080;
app.listen(PORT, () => console.log(`Serving on port ${9080}`));
