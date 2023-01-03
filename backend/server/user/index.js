const express = require("express");
const routes = express.Router();
const {
    userRegisterController,
    userLoginController,
    getUserController
} = require("./controller/userController")
const validateToken = require("../middleware/validate-user");
const validate = require("./validate");


routes.post('/signUp',validate.signupRequest ,userRegisterController);
routes.post('/login',validate.loginRequest,userLoginController)
routes.get('/getUser',validateToken,getUserController)


module.exports = routes;