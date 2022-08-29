const express = require('express');

let UserRouter = express.Router();
const userController = require('../controllers/user-controller');

UserRouter.use(express.json());
UserRouter.use(express.urlencoded({extended:true}));

UserRouter.get('/user/', userController.user);

module.exports = UserRouter;
