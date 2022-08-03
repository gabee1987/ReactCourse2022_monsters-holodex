import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Components
import CardList from "./components/card-list/card-list.component";

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

  // By extracting this function to a named function, instead of using an anonymous one, we got better code readability and performance as well
  onSearchChange = (event) => {
    const searchfield = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchfield };
    });
  };

  render() {
    console.log("render");

    // We save out these objects to variables, so wont need to use 'this.' all the time
    const { monsters, searchfield } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchfield)
    );

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />
        {/* {filteredMonsters.map((monster) => {
          // The first argument of the callback function is the element in the collection
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })} */}
        <CardList />
      </div>
    );
  }
}

export default App;
