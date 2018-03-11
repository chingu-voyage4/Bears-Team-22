const express = require('express');
import employee from './users'
import company from './companies'

var router = express.Router();

router.use('/employee', employee);
router.use('/company', company);

module.exports = router;
