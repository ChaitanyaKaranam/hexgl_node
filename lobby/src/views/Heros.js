import React, { Component } from 'react';
import HeroGrid from '../components/HeroGrid';

class Heros extends Component {
    render() {
        return (
            <div>
                <h3>Select a Character</h3>
                <HeroGrid setHero={(hero) => {this.props.setHero(hero)}} setView={(view) => {this.props.setView(view)}}/>
            </div>
        );
    }
}

export default Heros;