class LobbyManager{
    constructor(socketManager){
        this.socketManager = socketManager;
        this.lobbies = [{
            name: 'Practice',
            max_players: 1,
            players: []
        },
        {
            name: 'Practice',
            max_players: 1,
            players: []
        }];
    }

    getLobby(){
        return this.lobbies;
    }

    createLobby(lobby, player){
        if(this.lobbies.indexOf(lobby) === -1){
            if(lobby.name && lobby.max_players){
                lobby.players = [];
                this.lobbies.push(lobby);
                console.log(this.lobbies);
                this.addPlayer(lobby.name, player);
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

    addPlayer(lobby_name, player){
       
        this.getLobby().forEach(lobby => {
            if(lobby.name === lobby_name && lobby.players.indexOf(player) === -1){
                lobby.players.push(player);
                console.log(this.getLobby());
            }
        })
    }

    removePlayer(lobby_name, player){
        this.getLobby().forEach(lobby => {
            if(lobby.name == lobby_name && lobby[player]){
                delete lobby[player];
            }
        })
    }
}

module.exports = LobbyManager;