import React from 'react';

import '../../assets/items.css';

import Roll from './Roll';

class Items extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props,
      filteredRolls: this.props.rolls, // Filtered Rolls based on search text - start with all rolls
      filterCategory: 'Name', // the sort category - Name selected by default
    }
  }

  // Function to accumulate all the roll elements by looping through the filteredRolls state
  displayAllRolls() {
    // constant variable containing all the individual divs of rolls
    const allRollElements = [];

    // Sort the list on the basis of the sort category
    if (this.state.filterCategory === 'Name') { // string sorting
      this.state.filteredRolls.sort((roll1,roll2) => {
        const firstRollName = roll1.type.toLowerCase(); // ignore upper and lowercase
        const secondRollName = roll2.type.toLowerCase(); // ignore upper and lowercase

        if (firstRollName < secondRollName) {
          return -1;
        }

        if (firstRollName > secondRollName) {
          return 1;
        }

        return 0; // if the names are equal
      });
    }
    else if (this.state.filterCategory === 'BasePrice') { // floating point number sorting
      this.state.filteredRolls.sort((roll1,roll2) => roll1.price - roll2.price);  
    }

    // Looping through the filtered (and sorted) rolls array to create similar Items with different attributes (individual divs) and adding it to our constant
    this.state.filteredRolls.forEach((roll, index) => {
      allRollElements.push(<Roll key={roll.type} {...roll} addRollToCart={(params) => this.props.addItemsToCart(params)}></Roll>);
    });

    if (allRollElements.length === 0) {
      allRollElements.push(<div> No Match! </div>);
    }

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

  filterCategoryHandler = (event) => {
    this.setState({
      filterCategory: event.target.value,
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
            onChange={this.filterCategoryHandler}
          >
            <option value="Name">Name</option>
            <option value="BasePrice">Base Price</option>
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
