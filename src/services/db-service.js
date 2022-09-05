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

function getUser(username) {
    var sql = "SELECT * FROM `user` WHERE username = ?";

    // console.log(username)

    var results

    con.query(sql, username, (err, results, fields) => {
        if(err) throw err;
        if(results.length > 0) {
            // console.log(results[0].id);
            this.results = results
        }else{
            console.log('No user found')
        }
    })
    // console.log('Info')
    return
}

module.exports = {
    con,
    getUser,
    results
};
