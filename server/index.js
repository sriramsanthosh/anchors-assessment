const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.port || 8000;

const db = require('./config/mongoose');

// db();

// app.use(express.urlencoded());
app.set("view engine", "react");
app.set("views", "../client/public");

app.use("/", require("./routes/index"));

app.listen(port, function(err){
    if(err){
        console.log(`Error occured while running the server at ${port}`);
    }
    console.log(`Yup! Successfully running server on ${port}`);
});