const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

mongoose.connect('mongodb://localhost:27017/vpn-finder', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE');
    next();
});

app.use(bodyParser.json());
app.use(express.static("./public")); // serve static content from the public folder
app.use("/api", require("./api/api")); // any request that has to do with json 

app.get("*", (req, res) => {
    res.sendFile("index.html", { root: "./public" });
});

app.listen(3000, () => {
    console.log("Server started on port 3000...");
});