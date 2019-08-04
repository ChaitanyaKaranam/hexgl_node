import React, { Component } from 'react';
import { getLobbies, createLobby } from '../api';

class AvailableLobby extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lobby: [],
            view: 'available_view',
            lobby_name: '',
            player_count: 'default'
        }
    }

    componentDidMount(){
        this.refreshLobbies()
    }

    refreshLobbies(){
        console.log('called');
        getLobbies()
        .then(res => res.json())
        .then(res => {
            this.setState({ lobby: res })
        })
        .catch(err => {
            console.log(err);
        })
    }

    getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    renderView(){
        if(this.state.view === 'available_view'){
            return(
                <>
                    {this.state.lobby.length > 0 ?                
                        <table className="lobbyTable">
                            <thead>
                                <tr>
                                    <th>Lobby Name</th>
                                    <th>Maximum Players</th>
                                    <th>Available</th>
                                    <th>Join</th>
                                </tr>
                            </thead>
                            <tbody>                        
                                {this.renderLobbies()}
                            </tbody>
                        </table>
                        :
                        <h5>There are no available lobbies</h5>
                    }
                    <button className="button_create" onClick={() => {this.setState({ view: 'create_view'})}}>Create Lobby</button>
                </>
            )
        }else if(this.state.view === 'create_view'){
            return(
                <>
                    <input type="text" placeholder="Create Lobby" onChange={(e) => {
                        this.setState({ lobby_name: e.target.value });
                    }}/>
                    <br/>
                    <select value={this.state.player_count} onChange={(e) => {this.setState({ player_count: e.target.value })}}>
                        <option value="default" disabled>Select Players</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <br/>
                    <button onClick={() => {
                        let payload = {
                            lobby: {
                                "name": this.state.lobby_name,
                                "max_players": this.state.player_count
                            },
                            player: this.getCookie('userName')
                        }
                        console.log(payload);
                        createLobby(payload).then(res =>{
                            console.log(res)
                            this.refreshLobbies()
                            window.location.href = 'http://localhost:5000'
                        });
                        

                    }}>Create</button>
                    <button onClick={() => { this.setState({ view: 'available_view'})}}>Back</button>
                </>
            )
        }
    }

    renderLobbies(){
        return this.state.lobby.map((lobby) => {
            return(
                <tr>
                    <td><span className="lobbyname__lobby">{lobby.name}</span></td>
                    <td><span className="lobbyname__lobby">{lobby.max_players}</span></td>
                    <td><span className="lobbyname__lobby">{Object.keys(lobby.players).length}</span></td>
                    <td>
                        <span className="lobbyJoin__lobby">
                            <button onClick={() => {
                                // Test
                                const ws = new WebSocket('ws://localhost:5000');
                            }}>Join</button>
                        </span>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="lobbyDetails">
                {this.renderView()}
            </div>
        );
    }
}

export default AvailableLobby;