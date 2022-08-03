import { Component } from 'react';
import './card.styles.css';

class Card extends Component {
  render() {
    const { monster } = this.props;
    const { name, email, id } = monster;

    return (
      // By outsourcing the monster properties to a variable, if any of them changes, we dont need to rename them in the code where we use them
      // So instead of "monster.name" we can use simply "name"
      <div className="card-container" key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        {/* With the help of robohash we can get generated pictures by modifying the number in the url */}
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
