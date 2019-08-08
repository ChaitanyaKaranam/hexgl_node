const express = require('express');
const router = express.Router();

router.get('/get_lobbies', (req, res) => {
    if(res.locals.socketManager){
        res.send(res.locals.lobbyManager.getLobby())
    }else{
        res.status(500).send('Cannot Initialize Socket connection. Refresh page');
    }
});

router.get('/join_lobby', (req, res) => {
    if(req.query['lobby'] && req.query['player']){
        if(res.locals.lobbyManager.addPlayer(req.query['lobby'], req.query['player'])){
            res.send('Added Player')
        }else{
            res.status(500).send('Error Adding Player')
        }        
    }else{
        res.status(500).send('Invalid Parameters')
    }
})

router.get('/search_player', (req, res) => {
    if(req.query['player']){
        let val = res.locals.lobbyManager.searchPlayer(req.query.player);
        if(val){
            res.send(val);
        }else{
            res.status(500).send('Player not found')
        }
    }else{
        res.status(500).send('Player not found')
    }
})

router.get('/lobby_details', (req, res) => {
    if(req.query['lobby']){
        let val = res.locals.lobbyManager.lobbyDetails(req.query['lobby']);
        if(val){
            res.send(val);
        }else{
            res.status(500).send('Lobby not found')
        }
    }else{
        res.status(500).send('Lobby not found')
    }
})

router.post('/create_lobby', (req, res) => {
    console.log(req.body);
    if(res.locals.lobbyManager.createLobby(req.body['lobby'], req.body['player'])){
        res.status(201).send('Lobby Created')
    }else{
        res.status(500).send('Cannot create lobby');
    }
})

module.exports = router;