import React from 'react';

import '../../assets/items.css';

import Roll from './Roll';

class Items extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props,
      filteredRolls: this.props.rolls, // Filtered Rolls based on search text - start with all rolls
    }
  }

  // Function to accumulate all the roll elements by looping through the filteredRolls state
  displayAllRolls() {
    // constant variable containing all the individual divs of rolls
    const allRollElements = [];

    // Looping through the filteredRolls array to create similar Items with different attributes (individual divs) and adding it to our constant
    this.state.filteredRolls.forEach((roll, index) => {
      allRollElements.push(<Roll key={index} {...roll} addRollToCart={(params) => this.props.addItemsToCart(params)}></Roll>);
    });

    // TODO: Add No match! if there is no match

    return allRollElements;
  }

  filterRolls = () => {
    const searchText = document.getElementById("search-input-box").value;

    // select only the rolls which contain the searched text
    const filteredRolls = this.props.rolls.filter(roll => roll.type.toLowerCase().includes(searchText));

    this.setState({
      filteredRolls,
    });
  }

  render() {
    /* Contains the main text / body for the content */
    return (
      <div className="main-container">
        {/* Search Bar */}
        <div className="search-container">
          <input type="text" id="search-input-box" name="search-input" defaultValue=""/>
          <button className="search-button" onClick={this.filterRolls}>Search</button>
        </div>

        {/* Sorting Bar */}
        <div className="sorting-container">
          <label htmlFor="sort-by-box" className="sortby-label">sort by:</label>
          <select
            id="sort-by-box"
            className="sortBy-dropdown"
            onChange=""
          >
            <option value="Name">Name</option>
            <option value="Base Price">Base Price</option>
          </select>
        </div>

        {/* All Rolls container */}
        <div className="rolls-container">
          {this.displayAllRolls()}
        </div>
      </div>
    )
  }
}

export default Items;
