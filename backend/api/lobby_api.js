const express = require('express');
const LobbyManager = require('../lobby');
const router = express.Router();
const lobbyManager = new LobbyManager()

router.get('/get_lobbies', (req, res) => {
    if(res.locals.socketManager){
        res.send(lobbyManager.getLobby())
    }else{
        res.status(500).send('Cannot Initialize Socket connection. Refresh page');
    }
});

router.get('/join_lobby', (req, res) => {
    if(req.query['lobby_name'] && req.query['player']){
        if(lobbyManager.addPlayer(req.query['lobby_name'], req.query['player'])){
            res.send('Added Player')
        }else{
            res.status(500).send('Error Adding Player')
        }        
    }else{
        res.status(500).send('Invalid Parameters')
    }
})

router.post('/create_lobby', (req, res) => {
    console.log(req.body);
    if(lobbyManager.createLobby(req.body['lobby'], req.body['player'])){
        res.status(201).send('Lobby Created')
    }else{
        res.status(500).send('Cannot create lobby');
    }
})

module.exports = router;