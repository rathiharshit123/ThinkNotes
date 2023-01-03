
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

module.exports = {
    userRegisterController
}