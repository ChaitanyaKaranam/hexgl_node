const { GameManagerStatus } = require('../config');

class GameManager{
    constructor(lobbyManager) {
        this.lobbyManager = lobbyManager;
        this.game = {}
    }

    joinGame(lobby, player){
        if(this.game[lobby] && this.game[lobby]['players']){
            console.log("Joining existing game");
            this.game[lobby]['players'][player.name] = {
                connected: true,
                ws: player.ws,
                stats: null
            }
            this.checkGameStart(lobby);
        }else{
            console.log("Creating Game");
            this.createGame(lobby, player);
        }
    }

    createGame(lobby, player){
        this.game[lobby] = {};
        this.game[lobby]['status'] = GameManagerStatus.STARTED;
        this.game[lobby]['players'] = {}
        let players = this.lobbyManager.lobbyDetails(lobby).players;
        players.forEach(player_name => {
            this.game[lobby]['players'][player_name] = {
                    connected: false,
                    ws: null,
                    stats: null
            }
        });
        debugger;
        console.log(players);
        console.log(this.game[lobby]);
        this.joinGame(lobby, player);
    }

    checkGameStart(lobby){
        console.log("checking game start");
        let lobby_join_count = Object.keys(this.game[lobby]['players']).length;
        let lobby_player_count = this.lobbyManager.lobbyDetails(lobby).players.length;
        console.log(lobby_join_count, lobby_player_count);
        if(lobby_join_count === lobby_player_count){
            if(this.checkConnectionStatus(this.game[lobby]['players'])){
                this.setGameStatus(lobby, GameManagerStatus.RUNNING)
                return this.game[lobby]['players'];
            }else{
                return null;
            }
        }else{
            return null;
        }
    }

    checkConnectionStatus(players){
        console.log('Checkin connection stats');
        let ready = true;
        console.log(players);
        Object.keys(players).forEach(player => {
            if(!player['connected']){
                ready = false;
            }
        })
        return ready;
    }

    setGameStatus(lobby, status){
        this.game[lobby]['status'] = status;
    }
    
    getGameDetails(){
        return this.game;
    }

    gameState(payload){
        this.game[payload.lobby]['players'][payload.player]['stats'] = payload.stats;
    }
}

module.exports = GameManager;