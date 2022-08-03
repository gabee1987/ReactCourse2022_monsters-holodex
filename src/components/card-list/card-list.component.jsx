import { Component } from 'react';

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      // In a component only one parent element can be present at a time, in this case one div
      <div>
        {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

// Its just allows us to import this component to anywhere else
export default CardList;
