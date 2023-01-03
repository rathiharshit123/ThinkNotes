const express = require("express");
const routes = express.Router();
const {
    userRegisterController
} = require("./controller/userController")

const validate = require("./validate");
routes.post('/signUp',validate.signupRequest ,userRegisterController);


module.exports = routes;