
const UserService = require("../service/userService");
const util = require("../../utils/util");
const responseCode = require("../../utils/response-code");

const userRegisterController =  async function(req,res){
    let responseObject = util.responseFormat();
    try {
        let response = await UserService.register(req.body);
        responseObject = util.response(response.code,response.data);
    } catch (error) {
        console.log({
            error,
            msg: "error on signUp"
        })
        responseObject = util.response(responseCode.SOME_INTERNAL_ERROR);
    }
    return res.json(responseObject);
}

const userLoginController = async function(req,res){
    let responseObject = util.responseFormat();
    try {
        let response = await UserService.login(req.body);
        responseObject = util.response(response.code,response.data);
    } catch (error) {
        console.log({
            error,
            msg: "error on login"
        })
        responseObject = util.response(responseCode.SOME_INTERNAL_ERROR);
    }
    return res.json(responseObject);
}

const getUserController = async function(req,res){
    let responseObject = util.responseFormat();
    try {
        let response = await UserService.getUserDetails(req.query);
        console.log(response,"response")
        responseObject = util.response(response.code,response.data);
    } catch (error) {
        console.log({
            error,
            msg: "error on getting user Details"
        })
        responseObject = util.response(responseCode.SOME_INTERNAL_ERROR);
    }
    return res.json(responseObject);
}

module.exports = {
    userRegisterController,
    userLoginController,
    getUserController
}