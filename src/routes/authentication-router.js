const express = require('express');
let router = express.Router();
const authController = require('../controllers/authenticationController.js')

router.get('/register/', authController.register);

router.get('/login/', authController.login);

router.get('/user/', authController.user);

router.get('/lostPwd', authController.lostPwd);

router.get('/logout', authController.logout);

module.exports = router;
