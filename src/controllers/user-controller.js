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

function profileImage(req, res, next) {
    console.log(req.file);
    res.send('uploaded');
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

function displayImage(req, res, next) {
    const { filename } = req.params;
    const dirname = path.resolve();
    const fullfilepath = path.join(dirname, 'uploads/' + filename);
    return res.sendFile(fullfilepath);
}

module.exports = {
    user,
    profileImage,
    getInfo, 
    displayImage
};