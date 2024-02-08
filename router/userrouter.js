const express = require('express');
const  usercontrollers = require('../controllers/usercontroller');

const router = express.Router();

router.post('/create',usercontrollers.createUser);
router.get('/list',usercontrollers.listUser);
router.put('/update',usercontrollers.updateUser);
router.delete('/delete',usercontrollers.deleteUser);

router.post('/login',usercontrollers.loginUser);









module.exports = router;

