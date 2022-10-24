import React from "react";
import '../../assets/cartModal.css';

const CartModal = props => {
  // Display the modal based on the "show/hide" property - show is true when the add to cart button is clicked and becomes false after 3 seconds
  if (!props.displayCart) {
    return null;
  }

  // Do not display the modal if no items are added to the cart
  if (!props.cartItems.length) {
    return null;
  }

  function displayIndividualItemOnCart() {
    // Constant containing all the individual divs of rolls
    const allCartElements = [];

    // Looping through the cart items array to add each cart item to our constant and display it in UI together
    props.cartItems.forEach((item, index) => {
      allCartElements.push(
        <div key={`cart-item-${index}`} className="individual-item-container">
          <span className="bold"> {item.type} </span>
          <span> {item.glazing} glazing </span>
          <span> Pack of {item.packSize} </span>
          <span> Price: ${item.currentPrice} </span>
        </div>
      );
    });

    return allCartElements;
  }

  return (
    <div className="cart-modal">
      <div className="modal-head">Added to cart:</div>
      {displayIndividualItemOnCart()}
    </div>
  )
}

export default CartModal;
