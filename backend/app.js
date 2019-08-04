const express = require('express');
const path = require('path');
const http = require('http');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);
const SocketManager = require('./sockets');
const LobbyManager = require('./lobby');
const Lobby = require('./api/lobby_api');
const cors = require('cors');

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', express.static(path.join(__dirname, '/../hexgl')));

let socketManager = new SocketManager(server);
// let lobbyManager = new LobbyManager(socketManager);


// setInterval(() => {
//     lobbyManager.getLobby();
// }, 1000);

server.listen(process.env.PORT || 5000 , () => console.log('server started'))

app.use((req, res, next) => {
    res.locals.socketManager = socketManager;
    next();
})

app.use('/api/lobby', Lobby);

