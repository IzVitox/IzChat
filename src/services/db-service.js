const mysql = require('mysql');
const { database } = require('../configs/db-config');
const dbConfig = require('../configs/db-config');

var con = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
});

module.exports = {
    con
};
