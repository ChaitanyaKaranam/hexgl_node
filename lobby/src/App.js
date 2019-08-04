import React, { Component } from 'react';
import Heros from './views/Heros';
import Lobby from './views/Lobby';
import './App.css';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      view: 'hero_view',
      hero: null,
    }
  }

  componentDidUpdate(prevProps, prevState){
    console.log(prevState)
    console.log(this.state)
  }

  renderView(){
    if(this.state.view === 'hero_view'){
      return <Heros setHero={(hero) => {this.setState({ hero })}} setView={(view) => {this.setState({ view })}}/>
    }else if(this.state.view === 'lobby_view'){
      return <Lobby hero={this.state.hero}/>
    }
  }
  

  render(){
    return (
      <div className="App">
          {this.renderView()}
      </div>
    )
  }
}

export default App;
