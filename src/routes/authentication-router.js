const express = require('express');
const session = require('express-session');

let router = express.Router();
const authController = require('../controllers/authenticationController.js')
const sessionConf = require('../configs/session-config')

router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.use(session({
    secret: sessionConf.secret,
    resave: sessionConf.resave,
    saveUninitialized: sessionConf.saveUninitialized
}))

router.get('/register/', authController.register);

router.get('/login/', authController.login);

router.get('/user/', authController.user);

router.get('/lostPwd/', authController.lostPwd);

router.get('/logout/', authController.logout);

router.post('/login/', authController.loginPost);

router.post('/register/', authController.registerPost);

module.exports = router;
