import React, { Component } from 'react';
import HeroProfile from '../components/HeroProfile';
import AvailableLobby from '../components/AvailableLobby';

class Lobby extends Component {
    render() {
        return (
            <div>
                <h3>Lobby</h3>
                <div className="lobbyView">
                    <HeroProfile hero={this.props.hero}/>
                    <AvailableLobby/>
                </div>
            </div>
        );
    }
}

export default Lobby;