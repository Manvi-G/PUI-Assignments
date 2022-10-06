import React from 'react';

import '../../assets/navbar.css';
import logo from '../../assets/imgs/logo.svg';

import CartItems from './CartItems';

// Class to display the header section = logo, navigation items and cart details
class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props,
      displayCart: false, // Boolean value to indicate if cart modal should be displayed or not
    }
  }

  // Function to return if there are any items added to cart - true if present ; false is not items added
  displayCartItems() {
    const totalCartItems = this.props.cartItems && this.props.cartItems.length;

    return Boolean(totalCartItems);
  }

  // Function to return string with the total number of items added to cart
  getTotalNumberOfItems() {
    const totalItems = this.props.cartItems.length;

    return totalItems > 1 ? `${totalItems} items` : `${totalItems} item`;
  }

  // Function to return string with total price of all items on the cart
  getTotalPriceOnCart() {
    let totalPrice = 0;

    this.props.cartItems.forEach((item) => {
      totalPrice += Number(item.currentPrice);
    });

    return `Total: $ ${totalPrice.toFixed(2)}`;
  }

  // Function to handle the display of the cart modal on click of Cart button
  handleCartDisplay() {
    this.setState({
      displayCart: !this.state.displayCart,
    });
  }

  /* Contains the header element with logo and navigation section */
  render() {
    return (
      <div className={this.state.displayCart ? "": "nav-container"}>
        <div className="nav-header">
          <img src={logo}  alt="Bun Bun bake shop logo"/>
          <nav className="nav-options">
            <div className={this.displayCartItems() ? 'remove-margin options' : 'options'}>
              <button className="products">PRODUCTS</button>
              <button className="cart" onClick={() => this.handleCartDisplay()}>CART</button>
              {/* Commenting the hw4 code below - adding a separate section with hw5 */}
              {/* <CartModal {...this.state}/> */}
            </div>
            {/* Displaying the cart items as a separate div section ONLY if there is atleast one roll added to cart */}
            {
              this.displayCartItems() &&
              !this.state.displayCart &&
              <div id="cartDetailsContainer" className="cart-details-container">
                <span className="total-items">{this.getTotalNumberOfItems()}</span> 
                <span className="total-cost">{this.getTotalPriceOnCart()}</span>
              </div> 
            }
            <hr />
            <div className="heading">Our hand-made cinnamon rolls</div>
          </nav>
        </div>
        <CartItems {...this.state}></CartItems>
      </div>

    )
  }

}

export default NavBar;
