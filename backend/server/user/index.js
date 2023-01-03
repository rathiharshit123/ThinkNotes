const express = require("express");
const routes = express.Router();
const {
    userRegisterController,
    userLoginController,
} = require("./controller/userController")

const validate = require("./validate");


routes.post('/signUp',validate.signupRequest ,userRegisterController);
routes.post('/login',validate.loginRequest,userLoginController)


module.exports = routes;