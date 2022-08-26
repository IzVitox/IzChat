const authServ = require('../services/authentication-service.js');

function register(req, res, next) {
    res.render('register')
}

function login(req, res, next){
    res.render("login")
}

function user(req, res, next) {
    res.render('user')
}

function logout(req, res, next) {
    res.send('logging out')
}

function lostPwd(req, res, next) {
    res.send('Forgot Password')
}

// TODO: POST Methods for login and registration

module.exports = {
    register,
    login,
    user, 
    logout,
    lostPwd
}