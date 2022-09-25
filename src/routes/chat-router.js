const express = require('express')
const router = express.Router()
const chatController = require('../controllers/chat-controller')
const chatService = require('../services/chat-service')


router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.get('/', chatController.index)
router.get('/createChat/', chatController.renderCreateChat)
router.post('/createChat/', chatController.createNewChat)
router.get('/chat/:chatName/', chatController.chat)

router.post('/sendMessage/', chatController.createMessage)

router.get('/chat/:chatName/settings/', chatController.chatSettings)
router.post('/chat/:chatName/settings/', chatController.chatSettingsPost)


module.exports = router
