const mysql = require('mysql');
const dbConfig = require('../configs/db-config');

var con = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password
});


async function queryDatabase(sql, params) {

   con.connect();

   con.query(sql, params, (err, results, fields) =>{

        if(err) throw err;

        return {results, fields};

   });
    
}

module.exports = {
    queryDatabase
};
