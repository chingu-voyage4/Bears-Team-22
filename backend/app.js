var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
import config from './config';
import api from './routes';

var app = express();
app.use(bodyParser.json());

//Routes
app.use('/api', api);
app.use(express.static(path.resolve(__dirname, 'static')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
});

const PORT = process.env.PORT || 9080;
app.listen(PORT, () => console.log(`Serving on port ${9080}`));
