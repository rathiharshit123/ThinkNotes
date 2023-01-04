const util =require("../../utils/util");
const responseCode = require("../../utils/response-code");
const notesService = require("../service/notes-service");

const getAllNotesController = async(req,res) =>{
    let responseObject= util.responseFormat();
    try {
        let response = await notesService.getAllNotes(req.query)
        responseObject = util.response(response.code, response.data);
    } catch (error) {
        console.log({
            error,
            msg:"error in fetching notes for user"
        })
        responseObject = util.response(responseCode.SOME_INTERNAL_ERROR);
    }
    return res.json(responseObject);
}

const addNoteController = async(req,res) =>{
    let responseObject= util.responseFormat();
    try {
        let response = await notesService.addNotes(req.body);
        responseObject = util.response(response.code, response.data);
    } catch (error) {
        console.log({
            error,
            msg:"error in fetching notes for user"
        })
        responseObject = util.response(responseCode.SOME_INTERNAL_ERROR);
    }
    return res.json(responseObject);
}

const deleteNoteController = async(req,res) =>{
    let responseObject= util.responseFormat();
    try {
        reqParam = req.body;
        reqParam.noteId = req.params.id;
        let response =await notesService.deleteNote(req.body);
        responseObject = util.response(response.code, response.data);
    } catch (error) {
        console.log({
            error,
            msg:"error in fetching notes for user"
        })
        responseObject = util.response(responseCode.SOME_INTERNAL_ERROR);
    }
    return res.json(responseObject);
}

const updateNoteController = async(req,res) =>{
    let responseObject= util.responseFormat();
    try {
        reqParam = req.body;
        reqParam.noteId = req.params.id;
        let response = await notesService.updateNote(req.body);
        responseObject = util.response(response.code, response.data);
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
    getAllNotesController,
    addNoteController,
    updateNoteController,
    deleteNoteController
}