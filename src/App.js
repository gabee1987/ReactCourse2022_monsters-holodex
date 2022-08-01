import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  // Lifecycle methods
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') // This will be a promise, thats asynchronous in JS (will going to happen)
      .then((response) => response.json() ) // This is a callback
      .then((users) => // Another callback
        this.setState(
        () => { // Function method
          return {monsters: users}
        },
        () => {
          console.log(this.state);
        }));
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => { // The first argument of the callback function is the element in the collection
            return (
            <div key={monster.id}> 
              <h1>{monster.name}</h1>
            </div>
            );
          })
        }
      </div>
    );
  }
  
}

export default App;
