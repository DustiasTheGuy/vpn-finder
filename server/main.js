const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileupload = require("express-fileupload");
const cors = require("cors");
const serverConfig = require("./config");
const socketAPI = require('./socket/socket');
const app = express();

const http = require('http').createServer(app);
const io = require('socket.io')(http);

mongoose.connect(serverConfig.mongodb.uri, serverConfig.mongodb.options);

/* Middleware */
app.use(cors());
app.use(fileupload(serverConfig.fileUpload));
app.use(bodyParser.json());
app.use(express.static('./public')); // serve static content from the public folder

/* request handling */
app.use('/api', require('./api/api')); // any request that has to do with json 
io.on('connection', (socket) => socketAPI(socket, io));
app.get('*', (req, res) => res.sendFile('index.html', { root: './public' }));

http.listen(3000, () => {
    console.log('Server started on port 3000...');
});