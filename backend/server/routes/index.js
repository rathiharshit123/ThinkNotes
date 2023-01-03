
const user= require("../user");
const notes = require("../notes");



const route = function(app){
    app.use("/api/v1/user",user);
    app.use("/api/v1/notes",notes);

    app.get("/hello-world",(req,res)=>{
        res.send("hello world")
    })
}

module.exports = route;