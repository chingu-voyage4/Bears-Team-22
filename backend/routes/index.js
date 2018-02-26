var express = require('express');
var router = express.Router();
import employee from './users'

router.use('/employee', employee);

module.exports = router;
