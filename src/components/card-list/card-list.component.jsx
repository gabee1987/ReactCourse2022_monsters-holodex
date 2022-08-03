import { Component } from 'react';
import './card-list.styles.css';

import Card from '../card/card.component.jsx';

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      // In a component only one parent element can be present at a time, in this case one div
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

// Its just allows us to import this component to anywhere else
export default CardList;
