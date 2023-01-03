const responseCode = require("../../utils/response-code");
const notesModel = require("../model/notes-model");
const util = require("../../utils/util");

class NotesService {
    static async getAllNotes(requestObject){
        let responseObject = util.responseFormat();
        try {
            let userId = requestObject.userId;
            const notes = await notesModel.find({userId});
            console.log(notes,"NOTESS")
            responseObject.data.notes = notes;
            console.log(responseObject,"FINALL")
            return responseObject;
        } catch (error) {
            console.log({
                error,
                msg: "error in getting all notes for user"
            })
            throw error;
        }
    }
}
module.exports = NotesService;