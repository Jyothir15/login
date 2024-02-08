const express = require('express');
const  authcontrollers = require('../controllers/authcontroller');

const router = express.Router();

router.post('/create',authcontrollers.createauth);
router.post('/login',authcontrollers.loginauth);
router.post('/forgotpassword',authcontrollers.forgotpasswordauth);






module.exports = router;