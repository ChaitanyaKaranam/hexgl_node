const WebSocketServer = require("ws").Server;

class SocketManager{

    constructor(server) {
        this.ws_connections = {};
        this.lobbies = [];
        this.wss = new WebSocketServer({ server });
        this.wss.on('connection', (ws, req) => {
            this.createConnection(ws, req);
        })     
    }

    createConnection(ws, req){
        if(req.headers['cookie'] && req.headers['cookie'].includes('userName=')){
            let userName = req.headers['cookie'].split('userName=')[1];
            this.ws_connections[userName] = ws;

            // if(!this.ws_connections[userName]){
            //     this.ws_connections[userName] = ws;
            // }else{
            //     if(ws.readyState === 1){
            //         ws.send('UserName Exists');
            //     }
            // }
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