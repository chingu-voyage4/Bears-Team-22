require('dotenv').config();
const express = require('express');
const db = require('./db');
const path = require('path');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

import api from './routes';
import schema from './graphql/schemas';
import cors from 'cors';

const app = express();

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
