const userModel = require("../model/user-model")
const util = require("../../utils/util");
const responseCode = require("../../utils/response-code");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { response } = require("../../utils/util");
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
            userId = userId.toString();
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

    static async login(requestObj){
        let responseObject = util.responseFormat();
        try {
            let {email,password} = requestObj;
            let checkUserExist = await userModel.findOne({email});
            if(!checkUserExist){
                responseObject = util.response(responseCode.INVALID_CREDENTIALS);
                return response;
            }

            let comparePassword = await bcrypt.compare(password,checkUserExist.password);

            if(!comparePassword){
                responseObject = util.response(responseCode.INVALID_CREDENTIALS);
                return response;
            }
            let token = await this.createToken(checkUserExist._id,checkUserExist.email)
            responseObject.data = token;
            return responseObject;
        } catch (error) {
            console.log({
                error,
                msg: "error on login"
            })
            throw error;
        }
    }

    static async getUserDetails(requestObj){
        let responseObject = util.responseFormat();
        try {
            const userDetails = await userModel.findById(requestObj.userId).select("-password");
            responseObject.data= userDetails;
            return responseObject;
        } catch (error) {
            console.log({
                error,
                msg: "error on fetching userDetails"
            })
            throw error;
        }
    }
}

module.exports = UserService;