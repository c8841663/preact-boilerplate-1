import { h, Component } from 'preact';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    console.log(arguments)
    setInterval(() => {
      this.setState({
        counter: this.state.counter+1
      })
    }, 1000)
  }
  
  render(props, state) {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Preact {state.counter}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
