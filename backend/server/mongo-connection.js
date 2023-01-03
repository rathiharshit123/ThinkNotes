const chalk = require("chalk");
const mongoose = require("mongoose");
let url = "mongodb://localhost:27017/thinkNotes"
const mongoConnection = ()=>{

    let db = null;

    const getDb = ()=>{
        if(db) return db;
        else{
            connect();
        }
    }

    const connect = ()=>{
        db = mongoose.createConnection(url);
        return db;
    }

    connect();

    db.on("connected",function(){
        console.log(chalk.green("Mongo connection Succesfull"));
    })

    db.on("error",function(){
        console.log(chalk.red("Mongo connection failed"))
        throw new Error("Mongo connection failed")
    })

    return{
        connection: getDb()
    }
}

module.exports = mongoConnection();