const express = require("express");
const chalk= require("chalk")
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const port = 5000;
const route= require("./server/routes");


app.listen(port, ()=>{
    console.log(chalk.green(`listeting on port :${port}`))
})

route(app);

