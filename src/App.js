import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Stranger'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello {this.state.name}!
          </p>
          <button onClick={() => {
            // We shouldn't set state directly because react will not render it if the obj is the same
            // this.state.name = 'Gabee';
            // console.log(this.state);

            // Instead, we should use setState()
            this.setState({ name: 'Gabee' }); // Shallow merging
          }}>
            Change name
          </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  
}

export default App;
