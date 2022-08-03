import { Component } from 'react';
import './search-box.styles.css';

class SearchBox extends Component {
  render() {
    return (
      // This didn't work: className={'search-box ${this.props.className}'}
      // Managed to solve the string interpolation problem, it's not a single quatation mark, but a single tick character ...
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
