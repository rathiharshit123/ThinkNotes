const mongoose = require("mongoose");
const {connection} = require("../../mongo-connection");


const userSchema = new mongoose.Schema({
    name: {type: String,required: true,index: true},
    email: {type: String,unique: true,required: true},
    password: {type:String, required:true}
},{
    timestamps: true
})

module.exports = connection.model('userModel',userSchema,"user");