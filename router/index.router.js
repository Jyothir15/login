const express = require('express');
const router = express.Router();


const indexcontrollers = require('../controllers/indexcontrollers')



router.get('/',indexcontrollers.indexcontrollers);


module.exports = router;
