import React, { Component } from 'react';
let elem = document.getElementById('main-screen');

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nickname: ''
        }
    }
        
    setCookie(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }

    render() {
        return (
            <div>
               <h1>HexGL Racing Game</h1>
               <h5>Multiplayer</h5> 
               <div className="login">
                    <input type="text" placeholder="Enter NickName" onChange={(e) => {this.setState({ nickname: e.target.value })}}/>
                    <button onClick={() => {
                        this.setCookie('userName', this.state.nickname, 1);
                        this.props.setView('hero_view');                        
                    }}>Enter</button>
               </div>
            </div>
        );
    }
}

export default Login;