//import { Component } from 'react';
import './search-box.styles.css';

// Functional component
const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  // This didn't work: className={'search-box ${this.props.className}'}
  // Managed to solve the string interpolation problem, it's not a single quatation mark, but a single tick character ...
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

// Class component
// class SearchBox extends Component {
//   render() {
//     return (
//       // This didn't work: className={'search-box ${this.props.className}'}
//       // Managed to solve the string interpolation problem, it's not a single quatation mark, but a single tick character ...
//       <input
//         className={`search-box ${this.props.className}`}
//         type="search"
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandler}
//       />
//     );
//   }
// }

export default SearchBox;
