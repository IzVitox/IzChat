const multer = require("multer");

function checkLoggedIn(req) {
    if(req.session.loggedIn){
        return true;
    }
    else{
        return false;
    }
}

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, '../uploads/profile_images');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname);
  }
});

module.exports = {
    checkLoggedIn,
    storage
}