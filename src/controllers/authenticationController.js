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
    
}

function lostPwd(req, res, next) {
    
}

module.exports = {
    register,
    login,
    user, 
    logout,
    lostPwd
}