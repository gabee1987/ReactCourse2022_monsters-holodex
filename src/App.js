import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {firstName: 'Stranger', lastName: 'Joe'},
      company: 'BiffCo'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}</p>
          <button onClick={() => {
            // We shouldn't set state directly because react will not render it if the obj is the same
            // this.state.name = 'Gabee';
            // console.log(this.state);

            // Instead, we should use setState()
            this.setState(
              () => { // The first anonymous function is an updater function, the object in this will be used in shallow merge with the state
                return {
                  name: {firstName: 'Gabor', lastName: 'Koncz'}
                } 
              },
              () => { // This is a callback that only runs after the update method finished (it is optional)
                console.log(this.state);
              }
            ); // Shallow merging
          }}
          >
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
