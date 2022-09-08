const { fstat } = require('fs');
const path = require('path');
const userService = require('../services/user-service');

const dbService = require('../services/db-service');

const uploadService = require('../services/upload-service');

function user(req, res, next) {

    if(userService.checkLoggedIn(req)){
        
        dbService.getUser(req.session.username, (results) => {
            mail = results[0].email;

            dbService.getImage(results[0].imageID, (results) => {
                res.render('user', {
                    username : req.session.username,
                    email: mail,
                    profileImage: results[0].filename,
                    imageHeight: "",
                    imagewidth: "",
                    
                });
            });


            // console.log(mail)
        });
        
    }else{
        res.redirect('/a/login')
    }
}

function index(req, res, next) {

    if(userService.checkLoggedIn(req)){
        res.render("chatIndex")
    }else{
        res.render('login')
    }

}

function uploadImage(req, res, next) {
    // console.log(req.file);
    
    if(req.file.size < 1500000){
        uploadService.saveImage(req, res)
    }
    
    res.send('uploaded');
}

function getImageData(req, res, next) {
    uploadService.getImage(1, function (results) {
        console.log(results);
    });
    
    res.send('Getting Image Data')
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
    uploadImage,
    getInfo, 
    displayImage,
    getImageData,
    index
};