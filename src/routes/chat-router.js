const express = require('express')
const router = express.Router()
const chatController = require('../controllers/chat-controller')
const chatService = require('../services/chat-service')


router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.get('/', chatController.index)
router.get('/createChat/', chatController.renderCreateChat)
router.post('/createChat/', chatController.createNewChat)

module.exports = router
