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
app.use(session({
	 secret: 'jabbatical-clone',
	 resave: true ,
	 saveUninitialized: true,
	store: new MongoStore({mongooseConnection: db})
 }));

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

// The GraphQL endpoint
app.use('/graphql', graphqlExpress((req, res) => ({
	 schema,
	 rootValue: { session: req.session, user: req.user },
	 graphiql: true,
	 context: { req }
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
