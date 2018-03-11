const express = require('express');
import employee from './users'

var router = express.Router();

router.use('/employee', employee);

module.exports = router;
