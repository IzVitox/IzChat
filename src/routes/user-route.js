const express = require('express');

let UserRouter = express.Router();
const userController = require('../controllers/user-controller');

const userService = require('../services/user-service');

const multerService = require('../services/multer-service');

UserRouter.use(express.json());
UserRouter.use(express.urlencoded({extended:true}));

UserRouter.get('/user/', userController.user);
UserRouter.post('/profileImage/', multerService.imageUpload.single('image'), userController.uploadImage);
UserRouter.get('/getInfo/', userController.getInfo);
UserRouter.get('/image/:filename', userController.displayImage);
UserRouter.get('/getImageData/', userController.getImageData)

module.exports = UserRouter;
