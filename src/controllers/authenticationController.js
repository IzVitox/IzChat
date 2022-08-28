const session = require('express-session');
const authServ = require('../services/authentication-service.js');

function register(req, res, next) {
    res.render('register')
}

function login(req, res, next){
    res.render("login")
}

function user(req, res, next) {
    res.render('user', {
        username: req.session.username
    });
}

function logout(req, res, next) {
    req.session.loggedIn = false;
}

function lostPwd(req, res, next) {
    res.send('Forgot Password')
}

function loginPost(req, res, next) {
    let {username, password} = req.body;

    if(authServ.loginUser(username, password)){
        req.session.loggedIn = true;
        req.session.username = username;
        res.redirect('/u/user')
    }else{
        console.log('login failed');
        res.redirect('/u/login')
        // TODO login failed
    }
    
    
    

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
    user, 
    logout,
    lostPwd,
    loginPost,
    registerPost
}