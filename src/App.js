import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '1e2e111' // The key value is important so React can differetiate the invidual elements when its need to render one
        },
        {
          name: 'Frank',
          id: '1e2e112'
        },
        {
          name: 'Jacky',
          id: '1e2e113'
        },
        {
          name: 'Billy',
          id: '1e2e114'
        }
      ]
    };
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
