import React from 'react';
import '../../assets/common.css';

import Items from './Items'; /* Parent component for all the items shown on the homePage */
import NavBar from './NavBar'; /* Navigation Bar component */

import originalCinnamonRoll from '../../assets/imgs/original-cinnamon-roll.jpg';
import appleCinnamonRoll from '../../assets/imgs/apple-cinnamon-roll.jpg';
import raisinCinnamonRoll from '../../assets/imgs/raisin-cinnamon-roll.jpg';
import walnutCinnamonRoll from '../../assets/imgs/walnut-cinnamon-roll.jpg';
import doubleChocolateCinnamonRoll from '../../assets/imgs/double-chocolate-cinnamon-roll.jpg';
import strawberryCinnamonRoll from '../../assets/imgs/strawberry-cinnamon-roll.jpg';
import glutenFreeCinnamonRoll from '../../assets/imgs/gluten-free-cinnamon-roll.jpg';
import vanillaCinnamonRoll from '../../assets/imgs/vanilla-cinnamon-roll.jpg';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Array of roll objects (all rolls offered by comapany)
      rolls: [
        {
          type: 'Original cinnamon roll',
          attrName: 'original-cinnamon-roll',
          price: 2.49,
          img: originalCinnamonRoll,
        },
        {
          type: 'Apple cinnamon roll',
          attrName: 'apple-cinnamon-roll',
          price: 3.49,
          img: appleCinnamonRoll,
        },
        {
          type: 'Raisin cinnamon roll',
          attrName: 'raisin-cinnamon-roll',
          price: 2.99,
          img: raisinCinnamonRoll,
        },
        {
          type: 'Walnut cinnamon roll',
          attrName: 'walnut-cinnamon-roll',
          price: 3.49,
          img: walnutCinnamonRoll,
        },
        {
          type: 'Double-chocolate cinnamon roll',
          attrName: 'double-chocolate-cinnamon-roll',
          price: 3.99,
          img: doubleChocolateCinnamonRoll,
        },
        {
          type: 'Strawberry cinnamon roll',
          attrName: 'strawberry-cinnamon-roll',
          price: 3.99,
          img: strawberryCinnamonRoll,
        },
        {
          type: 'Gluten-free cinnamon roll',
          attrName: 'gluten-free-cinnamon-roll',
          price: 4.09,
          img: glutenFreeCinnamonRoll,
        },
        {
          type: 'Vanilla cinnamon roll',
          attrName: 'vanilla-cinnamon-roll',
          price: 3.49,
          img: vanillaCinnamonRoll,
        },
      ],
  
      // Items added to cart - empty at launch
      cartItems: [],
    };
  }

  // Function to add items to cart when the user clicks on "Add to Cart" button for any roll
  addItemsToCart = (item) => {
    this.state.cartItems.push(item);

    this.setState({
      cartItems: this.state.cartItems,
    });
  }

  render() {
    return (
      <div>
        <NavBar cartItems={this.state.cartItems}></NavBar>
        <Items rolls={this.state.rolls} addItemsToCart={(params) => {this.addItemsToCart(params)}}></Items>
      </div>
    )
  }

}

export default HomePage;
