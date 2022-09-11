const userService = require('../services/user-service')
const chatService = require('../services/chat-service')
const dbService = require("../services/db-service")

function index(req, res, next) {

    if(userService.checkLoggedIn(req)){
        dbService.getChats(req.session.username, (results) => {
            res.render("chatIndex", {
                chats: results
            });
        });
    }else{
        res.render('login')
    }

}

function createNewChat(req, res, next) {
    var {name} = req.body;
    // console.log(name)

    chatService.createNewChatInDB(name,req.session.username)

    res.redirect('/c/')
}

function renderCreateChat(req, res, next) {
    if(userService.checkLoggedIn(req)){
        res.render('createChat')
    }else{
        res.redirect('/a/login')
    }
}

function chat(req, res, next) {

    if(req.params.chatName){
        dbService.getChatData(req.params.chatName, (results) => {
            res.render('chat', {
                chatName: results[0].name,
            })
        })
    }else{
        res.send('Error, cant find Chat')
    }

}

module.exports = {
    index,
    createNewChat,
    renderCreateChat,
    chat
}