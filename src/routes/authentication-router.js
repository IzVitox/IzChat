const express = require('express');

let router = express.Router();
const authController = require('../controllers/authenticationController.js')

router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.get('/register/', authController.register);

router.get('/login/', authController.login);

router.get('/lostPwd/', authController.lostPwd);

router.get('/logout/', authController.logout);

router.post('/login/', authController.loginPost);

router.post('/register/', authController.registerPost);

module.exports = router;
