import { Component } from "react";

class CardList extends Component { 
    render() {
        return ( // In a component only one parent element can be present at a time, in this case one div
            <div>
                <h1>Hello I'm the CardList Component</h1>
            </div>
        )
    }
}

// Its just allows us to import this component to anywhere else
export default CardList;