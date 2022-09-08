const mysql = require('mysql');
const { database } = require('../configs/db-config');
const dbConfig = require('../configs/db-config');

var con = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
});

var results;

function getUser(username, callback) {
    var sql = "SELECT * FROM `user` WHERE username = ?";

    // console.log(username)
    con.query(sql, [username], (err, results, fields) => {
        if(err) throw err;
        if(results.length > 0) {
            // console.log(results[0].id);
            return callback(results)
        }else{
            console.log('No user found')
        }
    })
    // console.log('Info')
}

function getImage(id, callback) {
    
    var sql = "SELECT * FROM `profileImage` WHERE id = ?";

    // console.log(id);

    con.query(sql, [id], (err, results, fields) => {
        if(err) throw err;

        if(results.length > 0){
            return callback(results);
        }else{
            console.log("Image not found")
        }

    });

}

module.exports = {
    con,
    getUser,
    getImage
};
