import './card-list.styles.css';
import Card from '../card/card.component.jsx';

// Functional component
const CardList = ({ monsters }) => (
  // We dont need the destructuring here, we can do it in the argument
  //const { monsters } = props;

  // Implicit return without the "return()" syntax
  // In a component only one parent element can be present at a time, in this case one div
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

// Class component
// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       // In a component only one parent element can be present at a time, in this case one div
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }

// Its just allows us to import this component to anywhere else
export default CardList;
