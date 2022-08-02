import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
    console.log("constructor");
  }

  // Lifecycle methods
  componentDidMount() {
    console.log("componentDidMount");

    fetch("https://jsonplaceholder.typicode.com/users") // This will be a promise, thats asynchronous in JS (will going to happen)
      .then((response) => response.json()) // This is a callback
      .then(
        (
          users // Another callback
        ) =>
          this.setState(
            () => {
              // Function method
              return { monsters: users };
            },
            () => {
              console.log(this.state);
            }
          )
      );
  }

  handleMonsterFilter(event) {
    console.log(event.target.value);
    console.log(this.state.monsters);

    const inputValue = event.target.value.toLowerCase();
    const filteredMonsters = this.state.monsters.filter((monster) =>
      monster.name.toLowerCase().includes(inputValue)
    );

    console.log(filteredMonsters);
    this.setState({
      monsters: filteredMonsters,
    });
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            this.handleMonsterFilter(event);
          }}
        />
        {this.state.monsters.map((monster) => {
          // The first argument of the callback function is the element in the collection
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
