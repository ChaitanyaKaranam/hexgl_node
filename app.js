const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const server = http.createServer(app)
const WebSocketServer = require("ws").Server


app.use('/', express.static(path.join(__dirname, 'hexgl')));

var wss = new WebSocketServer({server});

server.listen(process.env.PORT || 5000 , () => console.log('server started'))

wss.on("connection", function(ws){
    ws.on('message', msg => {
        console.log(msg);
    })
 });