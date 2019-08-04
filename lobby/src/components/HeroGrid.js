import React, { Component } from 'react';
import { ReactComponent as Hero1 } from '../svg/Hero1.svg';
import { ReactComponent as Hero2 } from '../svg/Hero2.svg';
import { ReactComponent as Hero3 } from '../svg/Hero3.svg';
import { ReactComponent as Hero4 } from '../svg/Hero4.svg';
import { ReactComponent as Hero5 } from '../svg/Hero5.svg';
import { ReactComponent as Hero6 } from '../svg/Hero6.svg';
import { ReactComponent as Hero7 } from '../svg/Hero7.svg';
import { ReactComponent as Hero8 } from '../svg/Hero8.svg';
import { ReactComponent as Hero9 } from '../svg/Hero9.svg';

class HeroGrid extends Component {
    render() {
        return (
            <div className="hero_grid">  
                <Hero1 height="400" onClick={() => {
                    this.props.setHero('hero1')
                    this.props.setView('lobby_view')
                }}/>
                <Hero2 height="400" onClick={() => {
                    this.props.setHero('hero2')
                    this.props.setView('lobby_view')
                }}/>
                <Hero3 height="400" onClick={() => {
                    this.props.setHero('hero3')
                    this.props.setView('lobby_view')
                }}/>
                <Hero4 height="400" onClick={() => {
                    this.props.setHero('hero4')
                    this.props.setView('lobby_view')
                }}/>
                <Hero5 height="400" onClick={() => {
                    this.props.setHero('hero5')
                    this.props.setView('lobby_view')
                }}/>
                <Hero6 height="400" onClick={() => {
                    this.props.setHero('hero6')
                    this.props.setView('lobby_view')
                }}/>
                <Hero7 height="400" onClick={() => {
                    this.props.setHero('hero7')
                    this.props.setView('lobby_view')
                }}/>
                <Hero8 height="400" onClick={() => {
                    this.props.setHero('hero8')
                    this.props.setView('lobby_view')
                }}/>
                <Hero9 height="400" onClick={() => {
                    this.props.setHero('hero9')
                    this.props.setView('lobby_view')
                }}/>
            </div>
        );
    }
}

export default HeroGrid;