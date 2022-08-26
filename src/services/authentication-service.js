const db = require('./db-service');

function registration(username, password, email) {
    
    var sql = "INSERT INTO 'user' (username, password, email) VALUES (?, ?, ?)";

    db.queryDatabase(sql, [username, password, email]);

}

function existingUsername(username) {
    
    var sql = "SELECT * FROM 'user' WHERE username = ?"

    db.queryDatabase(sql, username, (results, fields) => {
        if (results.length > 0) {
            return true;
        }else{
            return false;
        }
    });

}