import React from "react";
import '../../assets/cartItems.css';

const CartItems = (props) => {
  // Display the cart-section based on the "show/hide" property - show is true when the add to cart button is clicked and becomes false after 3 seconds
  if (!props.displayCart) {
    return null;
  }

  // Do not display the modal if no items are added to the cart
  if (!props.cartItems.length) {
    return (
      <div className="cart-container">
        The cart is empty!
      </div>
    )
  }


  // Function to return string with total price of all items on the cart
  function calculateTotalPrice() {
    let totalPrice = 0;

    props.cartItems.forEach((item) => {
      totalPrice += Number(item.currentPrice);
    });

    return `Total: $ ${totalPrice.toFixed(2)}`;
  }

  function displayCartItems() {
    // Constant containing all the individual divs of rolls
    const allCartElements = [];

    // Looping through the cart items array to add each cart item to our constant and display it in UI together
    props.cartItems.forEach((item, index) => {
      allCartElements.push(
        /* Renders each individual item i.e. one block of roll - image, text, packsize, glazing and price */
        <div key={item.type} className="single-cart-item">
          <img src={item.img} alt={item.type}/>
          <span>{item.type}</span>
          <span>Glazing: {item.glazing}</span>
          <span>Pack Size: {item.packSize}</span>
          <span className="bold">$ {item.price}</span>
          <button
            className="remove-button-from-cart"
            type="button"
            onClick=""
          >
            Remove
          </button>
        </div>
      );
    });

    return allCartElements;
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <span>Shopping Cart ({props.cartItems.length} {props.cartItems.length > 1 ? 'Items': 'Item'})</span>
        <span>{calculateTotalPrice()}</span>
      </div>
      <div className="cart-items">
        {displayCartItems()}
      </div>
    </div>
  )
}

export default CartItems;
