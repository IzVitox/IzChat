const { fstat } = require('fs');
const path = require('path');
const userService = require('../services/user-service');
const multer = require('multer');

const dbService = require('../services/db-service');

const upload = multer({dest: 'uploads/'});

function user(req, res, next) {

    if(userService.checkLoggedIn(req)){
        res.render('user', {
            username : req.session.username
        });
    }else{
        res.redirect('/a/login')
    }
}

const handleError = (err, res) => {
    res
      .status(500)
      .contentType("text/plain")
      .end("Oops! Something went wrong!");
  };

function profileImage(req, res, next) {
    
}

function getInfo(req, res, next) {
    var sql = "SELECT * FROM `user` WHERE username = ?";

    username='izvitox';

    dbService.con.query(sql, username, (err, results, fields) => {
        if(err) throw err;
        if(results.length > 0) {
            res.send(results[0].email)
        }else{
            console.log('No user found')
        }
    })    
}

module.exports = {
    user,
    profileImage,
    getInfo
};