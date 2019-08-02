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
    if(ws_connections.length === 1){
        setTimeout(() => {
            ws_connections.forEach(client => {
                client.send('START');
            })
        }, 2000);
        setTimeout(() => {
            ws_connections.forEach(client => {
                client.send('FINISH');
            })
        }, 15000);
    }

    // check if all the clients are connected
    setInterval(() => {
        ws_connections.forEach(client => {
            if(client.readyState !== 1){
                console.log('Deleting client connection')
                delete ws_connections.splice(ws_connections.indexOf(client), 1);
            }
        })
    }, 1000);

    
    ws.on('message', msg => {
        console.log(msg);
    })
 });

