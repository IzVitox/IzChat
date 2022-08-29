const session = require('express-session');
const authServ = require('../services/authentication-service.js');

function register(req, res, next) {
    res.render('register')
}

function login(req, res, next){
    res.render("login")
}

function logout(req, res, next) {
    req.session.loggedIn = false;
    res.redirect('/a/login')
}

function lostPwd(req, res, next) {
    res.send('Forgot Password')
}

function loginPost(req, res, next) {
    let {username, password} = req.body;

    authServ.loginUser(username, password, req, res);
    
}

function registerPost(req, res, next) {
    
    let {email, username, password} = req.body;

    if(authServ.registration(username, password, email)){
        res.redirect('/u/login');
    }else{
        res.redirect('/u/register');
    }
    

}

module.exports = {
    register,
    login,
    logout,
    lostPwd,
    loginPost,
    registerPost
}