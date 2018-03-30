require('dotenv').config();
const express = require('express');
const db = require('./db');
import passport from './services/passport';
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session)
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

import api from './routes';
import schema from './graphql/schemas';
import cors from 'cors';
const app = express();
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  saveUnitialized: false,
  resave: false,
  cookie: { secure: false}
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({secret: 'jabbatical-clone', resave: false }));
app.use(passport.initialize());
app.use(passport.session());

// The GraphQL endpoint
app.use('/graphql', graphqlExpress((req, res) => ({
	 schema,
	 rootValue: { session: req.session, user: req.user },
	 graphiql: true,
	 context: req
 })));


//Routes
app.use('/api', api);
app.use(express.static(path.resolve(__dirname, 'static')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', 'index.html'));
});

const PORT = process.env.PORT || 9080;
app.listen(
    PORT //, () => console.log(`Serving on port ${9080}`)
);
