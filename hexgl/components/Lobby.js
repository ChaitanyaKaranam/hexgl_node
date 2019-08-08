/*
 1. Establish server connection.
 2. Fetch Lobby details.
 3. Update active user connections, lobby player details
*/

class Lobby extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lobby: {
                total_players: 0,
                joined_players: 0
            },
            active: null
        }
    }

    getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)===' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
    
    componentDidMount(){
        let payload = {
            event: 'JOIN_GAME',
            userName: this.getCookie('userName'),
            lobby_name: this.getCookie('lobby_name')
        }
        console.log(payload);
        window.socket.send(JSON.stringify(payload));
    }

    render() {
        return (
            <div className="lobby_wait">
                <h3>Lobby Server</h3>
            </div>
        );
    }
}

ReactDOM.render(<Lobby/>, document.querySelector('#lobby-wait'));