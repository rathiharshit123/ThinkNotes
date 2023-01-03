const express = require("express");
const routes = express.Router();
const validatetoken = require("../middleware/validate-user");
const {
    getAllNotes
} = require("./controller/notes-controller")

routes.get('/getAllNotes',validatetoken,getAllNotes)


module.exports = routes;