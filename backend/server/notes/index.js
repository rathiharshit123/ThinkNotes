const express = require("express");
const routes = express.Router();
const validatetoken = require("../middleware/validate-user");
const validateAddNoteRequest = require('./validate/add-note-request')
const {
    getAllNotesController,
    addNoteController,
    deleteNoteController,
    updateNoteController
} = require("./controller/notes-controller")

routes.get('/getAllNotes',validatetoken,getAllNotesController)
routes.post('/addNote',validatetoken,validateAddNoteRequest,addNoteController)
routes.put('/editNote/:id',validatetoken,updateNoteController)
routes.delete('/deleteNote/:id',validatetoken,deleteNoteController)

module.exports = routes;