var express = require('express');
var router = express.Router();
import employee from './users'
import company from './companies'

router.use('/employee', employee);
router.use('/company', company);

module.exports = router;
