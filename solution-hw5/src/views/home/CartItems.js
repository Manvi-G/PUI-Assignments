import React from "react";
import '../../assets/cartItems.css';

class CartItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props,
      cartElements: this.props.cartItems, // all the cart-items
    }
  }

  // Function to return string with total price of all items on the cart
  calculateTotalPrice() {
    let totalPrice = 0;

    this.props.cartItems.forEach((item) => {
      totalPrice += Number(item.currentPrice);
    });

    return `Total: $ ${totalPrice.toFixed(2)}`;
  }

  // Function to remove item from cart on button click
  removeItemFromCart = (index) => {
    // removing the deletec item from the array based on the index on the array
    this.state.cartItems.splice(index, 1);

    // updating the state to reflect on DOM and update other calculations
    this.setState({
      cartElements: this.state.cartItems,
    });
  }

  // Function to append all cart items as div and return all divs to be displayed on DOM
  displayCartItems() {
    // Constant containing all the individual divs of rolls
    const allCartElements = [];

    // Looping through the cart items array to add each cart item to our constant and display it in UI together
    this.state.cartElements.forEach((item, index) => {
      allCartElements.push(
        /* Renders each individual item i.e. one block of roll - image, text, packsize, glazing and price */
        <div key={`${item.type}-${item.glazing}-${item.packSize}`} className="single-cart-item">
          <img src={item.img} alt={item.type}/>
          <span>{item.type}</span>
          <span>Glazing: {item.glazing}</span>
          <span>Pack Size: {item.packSize}</span>
          <span className="bold">$ {item.currentPrice}</span>
          <button
            type="button"
            onClick={() => this.removeItemFromCart(index)}
          >
            Remove
          </button>
        </div>
      );
    });

    return allCartElements;
  }

  render() {
    // Do not display the section if no items are added to the cart
    if (!this.props.displayCart) {
      return null;
    }

    // Do not display the section if no items are added to the cart
    if (!this.props.cartItems.length) {
      return (
        <div className="cart-container">
          The cart is empty!
        </div>
      )
    }

    return (
      <div className="cart-container">
        <div className="cart-header">
          <span>Shopping Cart ({this.props.cartItems.length} {this.props.cartItems.length > 1 ? 'Items': 'Item'})</span>
          <span>{this.calculateTotalPrice()}</span>
        </div>
        <div className="cart-items">
          {this.displayCartItems()}
        </div>
      </div>
    )
  }
}

export default CartItems;
