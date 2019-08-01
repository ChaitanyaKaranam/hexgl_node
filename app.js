const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const server = http.createServer(app);
const WebSocketServer = require("ws").Server;

let ws_connections = []

app.use('/', express.static(path.join(__dirname, 'hexgl')));

var wss = new WebSocketServer({server});

server.listen(process.env.PORT || 5000 , () => console.log('server started'))

wss.on("connection", function(ws){
    
    console.log(ws);
    
    ws_connections.push(ws);

    // check if all the connections are in place and start the match
    if(ws_connections.length === 2){
        setTimeout(() => {
            ws_connections.forEach(client => {
                client.send('start');
            })
        }, 3000);
    }
    
    ws.on('message', msg => {
        console.log(msg);
    })
 });

