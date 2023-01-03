const userModel = require("../model/user-model")
const util = require("../../utils/util");
const responseCode = require("../../utils/response-code");

class UserService  {
    static async register(request){
        let responseObject = util.responseFormat();
        try {
            let {name,email,password} = request;
            
            await userModel.create(request);
            
            return responseObject;
        } catch (error) {
            console.log({
                error,
                msg: "signUp service error"
            });
            throw error
        }
    }
}

module.exports = UserService;