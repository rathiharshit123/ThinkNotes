const util =require("../../utils/util");
const responseCode = require("../../utils/response-code");
const notesService = require("../service/notes-service");

const getAllNotes = async(req,res) =>{
    let responseObject= util.responseFormat();
    try {
        let response = await notesService.getAllNotes(req.query)
        responseObject = util.response(response.code, response.data);
        console.log(responseObject,"ANSS")
    } catch (error) {
        console.log({
            error,
            msg:"error in fetching notes for user"
        })
        responseObject = util.response(responseCode.SOME_INTERNAL_ERROR);
    }
    return res.json(responseObject);
}

module.exports = {
    getAllNotes
}