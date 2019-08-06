class App extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            a: 1,
            b: 1,
            c: 1,
            d: 1,
            chart: null
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                a: this.state.a + 2.32,
                b: this.state.b + 2.19,
                c: this.state.c + 2.26,
                d: this.state.d + 2.28,
            })
        }, 500)
        this.renderGraph();
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state !== prevState){
            this.updateGraph(this.state.chart)
        }
    }

    renderGraph(){
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: 'Race Analytics',
                    data: [this.state.a, this.state.b, this.state.c, this.state.c, this.state.a],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                    labels: {
                        fontColor: "white"
                    }
                },
                scales: {
                    xAxes: [{
                        fontColor: 'white',
                    barPercentage: 0.5,
                    barThickness: 3,
                    maxBarThickness: 3,
                    minBarLength: 2,
                    gridLines: {
                        offsetGridLines: false
                    }
                }],
                    yAxes: [{
                        ticks: {
                            fontColor: 'white',
                            beginAtZero: false
                        }
                    }]
                }
            }
        });

        if(this.state.chart === null){
            this.setState({ chart: myChart })
        }

    }

    updateGraph(chart){
        chart.data.datasets.forEach(dataset => {
            dataset.data = [this.state.a, this.state.b, this.state.c, this.state.c, this.state.a]
        });
        chart.update();
    }
    
    render(){
        return(
            <div className="scorecard">
                <div style={{ width: '400px'}}>
                    <canvas id="myChart" width="400" height="400"></canvas>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#list-container'));