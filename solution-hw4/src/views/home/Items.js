import React from 'react';

import '../../assets/items.css';

import Roll from './Roll';

class Items extends React.Component {
  // Function to accumulate all the roll elements by looping through the entire roll state
  displayAllRolls() {
    // Constant containing all the individual divs of rolls
    const allRollElements = [];

    // Looping through the rolls array to create similar Items with different attributes (individual divs) and adding it to our constant
    this.props.rolls.forEach((roll, index) => {
      allRollElements.push(<Roll key={index} {...roll} addRollToCart={(params) => this.props.addItemsToCart(params)}></Roll>);
    });

    return allRollElements;
  }

  render() {
    /* Contains the main text / body for the content */
    return (
      <div className="rolls-container">
        {this.displayAllRolls()}
      </div>
    )
  }
}

export default Items;
