const express = require('express');
const path = require('path');
const http = require('http');
const cookieParser = require('cookie-parser')
const app = express();
const server = http.createServer(app);
const SocketManager = require('./sockets');

app.use(cookieParser());
app.use('/', express.static(path.join(__dirname, '/../hexgl')));

let socketManager = new SocketManager(server);

setTimeout(() => {
    console.log(socketManager.getConnections().length);
}, 10000);

server.listen(process.env.PORT || 5000 , () => console.log('server started'))

