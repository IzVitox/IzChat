const express = require('express');
let router = express.Router();
const authController = require('../controllers/authenticationController.js')

router.get('/register/', authController.registerUser);

module.exports = router;
