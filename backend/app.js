const express = require('express');
const path = require('path');
const http = require('http');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);
const LobbyManager = require('./lobby');
const GameManager = require('./gameManager');
const SocketManager = require('./sockets');
const Lobby = require('./api/lobby_api');
const Game = require('./api/game_api');
const cors = require('cors');

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', express.static(path.join(__dirname, '/../hexgl')));

let lobbyManager = new LobbyManager();
let gameManager = new GameManager(lobbyManager);
let socketManager = new SocketManager(server, gameManager, lobbyManager);

server.listen(process.env.PORT || 5000 , () => console.log('server started'))

app.use((req, res, next) => {
    res.locals.socketManager = socketManager;
    res.locals.lobbyManager = lobbyManager;
    res.locals.gameManager = gameManager;
    next();
})

app.use('/api/lobby', Lobby);
app.use('/api/game', Game);

