const express = require('express');

let UserRouter = express.Router();
const userController = require('../controllers/user-controller');

const userService = require('../services/user-service')

UserRouter.use(express.json());
UserRouter.use(express.urlencoded({extended:true}));

UserRouter.get('/user/', userController.user);
UserRouter.post('/profileImage/', userController.profileImage)
UserRouter.get('/getInfo/', userController.getInfo)

module.exports = UserRouter;
