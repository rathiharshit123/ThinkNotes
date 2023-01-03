const mongoose = require("mongoose");
const {connection} = require("../../mongo-connection");


const notesSchema = new mongoose.Schema({
    userId: {type : mongoose.Schema.Types.ObjectId, ref:'userModel'},
    title: {type: String,required:true},
    description: {type: String,required:true},
    tag: {type:String, default:"General"}
},{
    timestamps: true
})

module.exports = connection.model('notesModel',notesSchema,"notes");