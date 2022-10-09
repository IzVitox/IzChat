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

function getChats(username, callback) {
    
    var sql = "SELECT * FROM chat LEFT JOIN chatMember ON chat.id = chatMember.chatID WHERE chatMember.userID = ?";

    getUser(username, (res) => {
        con.query(sql, res[0].id, (err, results, fields) => {
            if(err) throw err
            // console.log("getting Chats")
            // console.log(results);
            return callback(results)
        })
    })


    return

}

function getChatData(chatName, callback) {
    var sql = "SELECT * FROM chat WHERE name = ?"

    con.query(sql, chatName, (err, results, fields) => {
        if(err)throw err;
        console.log(results[0].id)

        return callback(results)

    });

}

function getMessagesFromChat(chatID, callback) {
    var sql = "SELECT * FROM message WHERE chatID=?";

    con.query(sql, chatID, (err, results, fields) => {
        if(err) throw err;

        return callback(results);

    });
}

function createMessage(text, username, chatID) {
    var sql = "INSERT INTO message (text, author, chatID) VALUES (?, ?, ?)"

    con.query(sql, [[text], [username], [chatID]], (err) => {
        if(err) throw err;
    });

}

module.exports = {
    con,
    getUser,
    getImage,
    getChats,
    getChatData,
    getMessagesFromChat,
    createMessage
};
