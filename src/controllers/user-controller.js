const { fstat } = require('fs');
const path = require('path');
const userService = require('../services/user-service')
const multer = require('multer');

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
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });
    
      } else {
        console.log('file received');
        return res.send({
          success: true
        })
      }
}

module.exports = {
    user,
    profileImage
};