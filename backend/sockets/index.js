const WebSocketServer = require("ws").Server;

class SocketManager{

    constructor(server, gameManager, lobbyManager) {
        this.ws_connections = {};
        this.lobbies = [];
        this.wss = new WebSocketServer({ server });
        this.lobbyManager = lobbyManager;
        this.gameManager = gameManager;
        this.wss.on('connection', (ws, req) => {
            console.log(ws);
            this.createConnection(ws, req);
            ws.on('message', (val) => {
                try{
                    let payload = JSON.parse(val);
                    if(payload.event){
                        this.eventManager(payload);
                    }
                }catch(e){
                    console.log(e)
                }
            })
        })     
    }

    createConnection(ws, req){
        if(req.headers['cookie'] && req.headers['cookie'].includes('userName=')){
            req.headers['cookie'].split(';').forEach(val => {
                if(val.includes('userName=')){
                    let userName =val.split('userName=')[1];
                    this.ws_connections[userName] = ws;
                }
            })
        }
    }

    getConnections(){
        return this.ws_connections;
    }

    getUserConnection(user){
        if(this.ws_connections[user]){
            return this.ws_connections[user]
        }
    }

    async eventManager(payload){
        console.log('Event manager triggered');
        switch(payload.event){
            case 'JOIN_GAME':
                console.log("fetching socket details");
                console.log(Object.keys(this.getConnections()));

                console.log(this.getUserConnection(payload.userName));
                let game = await this.gameManager.joinGame(payload.lobby_name, { name: payload.userName, ws: this.getUserConnection(payload.userName)});
                if(game){
                    console.log(game);
                }
                break;
            default:
                console.log('Invalid Event');
        }
    }

    // initializeConnection(){
    //     wss.on("connection", function(ws){
        
    //         console.log(ws);
            
    //         ws_connections.push(ws);
        
    //         // check if all the connections are in place and start the match
    //         if(ws_connections.length === 1){
    //             setTimeout(() => {
    //                 ws_connections.forEach(client => {
    //                     client.send('START');
    //                 })
    //             }, 2000);
    //             setTimeout(() => {
    //                 ws_connections.forEach(client => {
    //                     client.send('FINISH');
    //                 })
    //             }, 15000);
    //         }
        
    //         // check if all the clients are connected
    //         setInterval(() => {
    //             ws_connections.forEach(client => {
    //                 if(client.readyState !== 1){
    //                     console.log('Deleting client connection')
    //                     delete ws_connections.splice(ws_connections.indexOf(client), 1);
    //                 }
    //             })
    //         }, 1000);
        
            
    //         ws.on('message', msg => {
    //             console.log(msg);
    //         })
    //      });
    // }

}

module.exports = SocketManager