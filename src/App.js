import { useState, useEffect } from 'react'; // This is a Hook, with this we can encapsulate local state in a functional component
import './App.css';

// Components
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

// As a functional component it looks like this ->
const App = () => {
  const [searchField, setSearchField] = useState(''); // Array destructuring, it gives us back 2 value: [value, setValue]
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log('render');

  // The first argument is going to be a callback function, the 2nd argument is an array of dependencies
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') // This will be a promise, thats asynchronous in JS (will going to happen)
      .then((response) => response.json()) // This is a callback
      .then((users) => setMonsters(users));
  }, []); // This array has to be empty because we only want to call fetch once, if nothing changes in the array, the fetch wont run again

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchfieldString = event.target.value.toLowerCase();
    setSearchField(searchfieldString);
  };

  // We can check what parts of the app is being rerendered after the title change ->
  // Chrome -> F12 -> ... -> More tools -> Rendering -> Paint Flashing
  const onTitleChange = (event) => {
    const searchfieldString = event.target.value;
    setTitle(searchfieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder={'search monsters'}
        className={'monsters-search-box'}
      />
      <br />
      <SearchBox
        onChangeHandler={onTitleChange}
        placeholder={'set app title'}
        className={'title-search-box'}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// As a class component it looks like this ->
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchfield: '',
//     };
//   }

// Lifecycle methods
// componentDidMount() {
//   fetch('https://jsonplaceholder.typicode.com/users') // This will be a promise, thats asynchronous in JS (will going to happen)
//     .then((response) => response.json()) // This is a callback
//     .then((users) =>
//       this.setState(() => {
//         // Function method
//         return { monsters: users };
//       })
//     );
// }

// By extracting this function to a named function, instead of using an anonymous one, we got better code readability and performance as well
// onSearchChange = (event) => {
//   const searchfield = event.target.value.toLowerCase();
//   this.setState(() => {
//     return { searchfield };
//   });
// };

//   render() {
//     // We save out these objects to variables, so wont need to use 'this.' all the time
//     const { monsters, searchfield } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(searchfield)
//     );

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder={'search monsters'}
//           className={'monsters-search-box'}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
