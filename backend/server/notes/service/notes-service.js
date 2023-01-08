const responseCode = require("../../utils/response-code");
const notesModel = require("../model/notes-model");
const util = require("../../utils/util");

class NotesService {
    static async getAllNotes(requestObject){
        let responseObject = util.responseFormat();
        try {
            let userId = requestObject.userId;
            const notes = await notesModel.find({userId});
            responseObject.data.notes = notes;
            return responseObject;
        } catch (error) {
            console.log({
                error,
                msg: "error in getting all notes for user"
            })
            throw error;
        }
    }

    static async addNotes(requestObject){
        let responseObject = util.responseFormat();
        try {
            let note = await notesModel.create(requestObject);
            responseObject.data = note;
            return responseObject;
        } catch (error) {
            console.log({
                error,
                msg: "error in getting all notes for user"
            })
            throw error;
        }
    }

    static async deleteNote(requestObject){
        let responseObject = util.responseFormat();
        try {
            let {noteId,userId} = requestObject;
            if(noteId.length!=24){
                responseObject.code = responseCode.NOTE_NOT_FOUND;
                return responseObject;
            }
            let note = await notesModel.findById(noteId);

            if(!note){
                responseObject.code = responseCode.NOTE_NOT_FOUND;
                return responseObject;
            }
            if(note.userId.toString()!=userId){
                responseObject.code = responseCode.AUTHENTICATION_FAILED;
                return responseObject;
            }

            await notesModel.findByIdAndDelete(noteId);
            return responseObject;

        } catch (error) {
            console.log({
                error,
                msg: "error in getting all notes for user"
            })
            throw error;
        }
    }

    static async updateNote(requestObject){
        let responseObject = util.responseFormat();
        try {
            let {title,description,tag,userId,noteId}= requestObject;
            if(noteId.length!=24){
                responseObject.code = responseCode.NOTE_NOT_FOUND;
                return responseObject;
            }
            let newNoteObject = {};
            if(title) newNoteObject.title = title;
            if(description) newNoteObject.description = description;
            if(tag) newNoteObject.tag = tag;

            let note = await notesModel.findById(noteId);
            if(!note){
                responseObject.code = responseCode.NOTE_NOT_FOUND;
                return responseObject;
            }

            if(note.userId.toString()!=userId){
                responseObject.code = responseCode.AUTHENTICATION_FAILED;
                return responseObject;
            }

            let savedNote = await notesModel.findByIdAndUpdate(noteId,{$set:newNoteObject},{new: true})
            responseObject.data = savedNote;
            return responseObject;

        } catch (error) {
            console.log({
                error,
                msg: "error in updating notes"
            })
            throw error;
        }
    }

}
module.exports = NotesService;