const authServ = require('../services/authentication-service.js');

function registerUser(req, res, next) {
    res.send('<h1>Register</h1>')
}

module.exports = {
    registerUser,
}