const dbService = require('../services/db-service')

function createNewChatInDB(name, username) {
    var sql = "INSERT INTO `chat` (name, adminID) VALUES (?)"

    dbService.getUser(username, (results) => {

        var values = [[name], [results[0].id]]

        dbService.con.query(sql, [values], (err, res, fields) => {
            if(err) throw err
        })
    });

}

module.exports = {
    createNewChatInDB
}