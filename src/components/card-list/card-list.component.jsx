import { Component } from 'react';
import './card-list.styles.css';
import './card.styles.css';

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      // In a component only one parent element can be present at a time, in this case one div
      <div className="card-list">
        {monsters.map((monster) => {
          // By outsourcing the monster properties to a variable, if any of them changes, we dont need to rename them in the code where we use them
          // So instead of "monster.name" we can use simply "name"
          const { name, email, id } = monster;

          return (
            <div className="card-container" key={id}>
              <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2`}
              />
              {/* With the help of robohash we can get generated pictures by modifying the number in the url */}
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

// Its just allows us to import this component to anywhere else
export default CardList;
