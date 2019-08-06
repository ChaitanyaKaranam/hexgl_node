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

class HeroProfile extends Component {
    render() {
        return (
            <div className="heroProfile">
                {this.props.hero === 'hero1' ? <Hero1/> : <></>}
                {this.props.hero === 'hero2' ? <Hero2/> : <></>}
                {this.props.hero === 'hero3' ? <Hero3/> : <></>}
                {this.props.hero === 'hero4' ? <Hero4/> : <></>}
                {this.props.hero === 'hero5' ? <Hero5/> : <></>}
                {this.props.hero === 'hero6' ? <Hero6/> : <></>}
                {this.props.hero === 'hero7' ? <Hero7/> : <></>}
                {this.props.hero === 'hero8' ? <Hero8/> : <></>}
                {this.props.hero === 'hero9' ? <Hero9/> : <></>}
            </div>
        );
    }
}

export default HeroProfile;