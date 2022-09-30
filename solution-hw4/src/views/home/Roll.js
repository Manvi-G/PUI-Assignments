import React from 'react';

// Class to capture important components for a Roll object
class Roll extends React.Component {
  constructor(props) {
    super(props);

    /** All possible state values - associated items to a roll 
     * type {String}: type of roll - Original, Apple, Raisin, Walnut, Strawberry, Gluten-free, Double-chocolate, Vanilla
     * packSize {Float}: associated adaption value for selected packSize from dropdown
     * glazing {Float}: associated adaptation value for selected glazing from dropdown
     * price {Float}: current price of the roll with selected filters
     */
    this.state = {
      type: props.type,
      price: props.price,
      glazing: 'Keep original', // default selection is Keep original
      packSize: 1, // default selection is 1

    };

    // Price Adaption object for glazing dropdown options
    this.glazingPriceAdaptation = {
      "Keep original": 0.0,
      "Sugar milk": 0.0,
      "Vanilla milk": 0.5,
      "Double chocolate": 1.5,
    };
    
    // Price Adaption object for pack-size dropdown options
    this.packSizePriceAdaptation = {
      1: 1,
      3: 3,
      6: 5,
      12: 10,
    };
  }

  // Function to compute price whenever the user changes the glazing or the packSize
  getComputedPrice = () => {
    const priceAdaptationForGlaze = this.glazingPriceAdaptation[this.state.glazing];
    const priceAdaptationForPackSize = this.packSizePriceAdaptation[this.state.packSize];

    const updatedPrice = (this.state.price + priceAdaptationForGlaze) * priceAdaptationForPackSize;

    return updatedPrice.toFixed(2);
  }

  // Function to update the state - glazing - whenver the user makes a change from the dropdown
  setGlazing = (event) => {
    this.setState({
      glazing: event.target.value,
    });
  }

  // Function to update the state - packSize - whenver the user makes a change from the dropdown
  setPackSize = (event) => {
    this.setState({
      packSize: event.target.value,
    });
  }

  render() {
    return (
      /* Renders each individual item i.e. one block of roll - image, text, packsize, glazing and price */
      <div className="single-roll-container">
        <img src={this.props.img} alt={this.state.type}/>
        <span className="roll-name bold">{this.state.type}</span>

        {/* Dropdown to display the glazing options */}
        <section className="glazing-container">
          <label htmlFor={`glazing-${this.props.attrName}`} className="input-label">Glazing:</label>
          <select
            id={`glazing-${this.props.attrName}`}
            name={`glazing-${this.props.attrName}`}
            className="right-content glazing"
            onChange={this.setGlazing}
          >
            <option value="Keep original">Keep original</option>
            <option value="Sugar milk">Sugar milk</option>
            <option value="Vanilla milk">Vanilla milk</option>
            <option value="Double chocolate">Double chocolate</option>
          </select>
        </section>

        {/* Dropdown to display the packSize options */}
        <section className="pack-size-container">
          <span className="input-label">Pack size:</span>
          <span className="right-content pack-size">
            <span>
              <input
                type="radio"
                id={`${this.props.attrName}-1`}
                name={this.props.attrName}
                value="1"
                onChange={this.setPackSize}
                defaultChecked
              />
              <label htmlFor={`${this.props.attrName}-1`}>1</label>
            </span>

            <span>
              <input
                type="radio"
                id={`${this.props.attrName}-3`}
                name={this.props.attrName}
                value="3"
                onChange={this.setPackSize}
              />
              <label htmlFor={`${this.props.attrName}-3`}>3</label>
            </span>

            <span>
              <input
                type="radio"
                id={`${this.props.attrName}-6`}
                name={this.props.attrName}
                value="6"
                onChange={this.setPackSize}
              />
              <label htmlFor={`${this.props.attrName}-6`}>6</label>
            </span>

            <span>
              <input
                type="radio"
                id={`${this.props.attrName}-12`}
                name={this.props.attrName}
                value="12"
                onChange={this.setPackSize}
              />
              <label htmlFor={`${this.props.attrName}-12`}>12</label>
            </span>
          </span>
        </section>

        {/* Container for price and checkout option */}
        <section className="price-container">
          <span className="bold">{`$ ${this.getComputedPrice()}`}</span>
          <button
            className="right-content add-to-cart bold"
            type="button"
            onClick={() => this.props.addRollToCart({ ...this.state, currentPrice: this.getComputedPrice()})}
          >
            Add to Cart
          </button>
        </section>
      </div>
    )
  }
}

export default Roll;