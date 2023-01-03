const userModel = require("../model/user-model")
const util = require("../../utils/util");
const responseCode = require("../../utils/response-code");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
class UserService  {
    static async register(request){
        let responseObject = util.responseFormat();
        try {
            let {name,email,password} = request;

            let checkUserExist = await userModel.findOne({email}); 
            if(checkUserExist){
                responseObject = util.response(responseCode.EMAIL_EXISTS);
                return responseObject
            }

            let hashedPassword = await this.getHashPassword(password);   // hashing the password

            let res = await userModel.create({
                name,
                email,                                          // saving to db
                password: hashedPassword
            });

            let token = await this.createToken(res._id,email); // created auth token using jwt

            responseObject.data = token;
            
            return responseObject;
        } catch (error) {
            console.log({
                error,
                msg: "signUp service error"
            });
            throw error
        }
    }

    static async getHashPassword(password){
        try {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password,salt);
            return hashPassword;
        } catch (error) {
            console.log({
                error,
                msg: "error on hashing password - getHashPassword"
            })
            throw error;
        }
    }

    static async createToken( userId, email) {
        try {
            let tokenValue = {
                userId,
                email,
            };
            let token = jwt.sign(tokenValue, 'shss');
            tokenValue.token = token;
            return tokenValue;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserService;