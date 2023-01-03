const express = require("express");
const chalk= require("chalk")
const app = express();
app.use(express.json());

const port = 3000;
const route= require("./server/routes");

const {connection} = require("./server/mongo-connection")

app.listen(port, ()=>{
    console.log(chalk.green(`listeting on port :${port}`))
})

route(app);

