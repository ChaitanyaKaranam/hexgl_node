import React, { Component } from 'react';
import Login from './views/Login';
import Heros from './views/Heros';
import Lobby from './views/Lobby';
import './App.css';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      view: 'login_view',
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
    }else if(this.state.view === 'login_view'){
      return <Login setView={(view) => {this.setState({ view })}}/>
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
