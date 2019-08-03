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
                <Hero1 height="400"/>
                <Hero2 height="400"/>
                <Hero3 height="400"/>
                <Hero4 height="400"/>
                <Hero5 height="400"/>
                <Hero6 height="400"/>
                <Hero7 height="400"/>
                <Hero8 height="400"/>
                <Hero9 height="400"/>
            </div>
        );
    }
}

export default HeroGrid;