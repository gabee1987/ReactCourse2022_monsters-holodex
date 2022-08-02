import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchfield: "",
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

  // handleMonsterFilter(event) {
  //   console.log(event.target.value);
  //   console.log({ startingArraythis: this.state.monsters });

  //   const searchfield = event.target.value.toLowerCase();
  //   const filteredMonsters = this.state.monsters.filter((monster) =>
  //     monster.name.toLowerCase().includes(this.state.searchfield)
  //   );

  //   console.log(filteredMonsters);
  //   this.setState(
  //     () => {
  //       return { searchfield };
  //     },
  //     () => {
  //       console.log({ endingArray: this.state.monsters });
  //     }
  //   );
  // }

  render() {
    console.log("render");

    const filteredMonsters = this.state.monsters.filter((monster) =>
      monster.name.toLowerCase().includes(this.state.searchfield)
    );

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            const searchfield = event.target.value.toLowerCase();
            this.setState(() => {
              return { searchfield };
            });
          }}
        />
        {filteredMonsters.map((monster) => {
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
