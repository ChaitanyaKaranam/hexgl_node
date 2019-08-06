class App extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            a: 1,
            b: 1,
            c: 1,
            d: 1
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                a: this.state.a + 2,
                b: this.state.b + 2.5,
                c: this.state.c + 2.7,
                d: this.state.d + 2.8,
            })
        }, 500)
    }
    
    render(){
        return(
            <div className="scorecard">
                <ul>
                    <li>Krishna - {this.state.a}</li>
                    <li>Krishna - {this.state.b}</li>
                    <li>Krishna - {this.state.c}</li>
                    <li>Krishna - {this.state.d}</li>
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#list-container'));