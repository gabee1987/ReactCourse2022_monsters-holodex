import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchfield: '',
    };
  }

  // Lifecycle methods
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') // This will be a promise, thats asynchronous in JS (will going to happen)
      .then((response) => response.json()) // This is a callback
      .then((users) =>
        this.setState(() => {
          // Function method
          return { monsters: users };
        })
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
    // We save out these objects to variables, so wont need to use 'this.' all the time
    const { monsters, searchfield } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchfield)
    );

    return (
      <div className="App">
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder={'search monsters'}
          className={'search-box'}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
