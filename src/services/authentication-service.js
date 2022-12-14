const db = require('./db-service');

function registration(username, password, email) {
    
    if(existingUsername(username) == false){
        var sql = "INSERT INTO `user` (`username`, `password`, `email`) VALUES (?)";

        //TODO Hash password, check 2 password input

        var values = [[username], [password], [email]]

        db.con.query(sql, [values], (error, results, fields) => {
            if(error) throw error;
        });
        return true;
    }else{
        return false;
    }

}

function existingUsername(username) {
    const sql = "SELECT * FROM `user` WHERE username = ?"

    db.con.query(sql, [username], (error, results, fields) => {
        if(error) throw error;
        if (results.length > 0) {
            return true;
        }else{
            return false;
        }
    });

}

function loginUser(username, password, req, res) {
    const sql = "SELECT * FROM `user` WHERE username = ? AND password = ?";

    db.con.query(sql, [username, password], (error, results, fields) => {
        if(error) throw error;
        if(results.length > 0){
            req.session.loggedIn = true;
            req.session.username = username;
            res.redirect('/u/');
        }else{
            //TODO handle false credentials
            res.redirect('/a/login/')
        }
    });
}

module.exports = {
    registration,
    existingUsername,
    loginUser, 
}