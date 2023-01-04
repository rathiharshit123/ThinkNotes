const express = require("express");
const routes = express.Router();
const validatetoken = require("../middleware/validate-user");
const {
    getAllNotesController,
    addNoteController,
    deleteNoteController,
    updateNoteController
} = require("./controller/notes-controller")

routes.get('/getAllNotes',validatetoken,getAllNotesController)
routes.post('/addNote',validatetoken,addNoteController)
routes.put('/updateNote/:id',validatetoken,updateNoteController)
routes.delete('/deleteNote/:id',validatetoken,deleteNoteController)

module.exports = routes;