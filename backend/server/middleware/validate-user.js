const jwt = require("jsonwebtoken");
const responseCode = require("../utils/response-code");
const util = require("../utils/util");

const validateToken = async (req,res,next)=>{
    let responseObject= util.responseFormat()
    try {
        let reqParams = (req.method === 'GET') ? req.query : req.body;
        let token = reqParams.token || req.headers['token'] || null;
        if (token === null) {
            throw new Error();
        }

        let userDeatils = await jwt.verify(token, "shss");
        if(userDeatils){
            reqParams.userId= userDeatils.userId;
            return next();
        }
        throw new Error();
        
    } catch (error) {
        responseObject= util.response(responseCode.AUTHENTICATION_FAILED);
        res.json(responseObject);
    }
}

module.exports = validateToken;