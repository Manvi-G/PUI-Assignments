import React from 'react';

/* Renders each individual item i.e. one block of roll - image, text, packsize, glazing and price */
class Roll extends React.Component {
  constructor(props) {
    super(props);

    /** All possible state values - associated items to a roll 
     * type {String}: type of roll - Original, Apple, Raisin, Walnut, Strawberry, Gluten-free, Double-chocolate, Vanilla
     * img {SVG}: image of the roll
     * packSize {Float}: associated adaption value for selected packSize from dropdown
     * glazing {Float}: associated adaptation value for selected glazing from dropdown
     * price {Float}: current price of the roll with selected filters
     * attrName {String}: individual class/id for the roll (for HTML use)
     */
    this.state = {
      ...props, 
      glazing: 0.0, // default selection is Original Cinnamon Roll
      packSize: 1, // default selection is 1
    };
  }

  computePrice = () => {
    const updatedPrice = (this.state.price + Number(this.state.glazing)) * Number(this.state.packSize);

    return updatedPrice.toFixed(2);
  };

  setGlazing = (event) => {
    this.setState({
      glazing: event.target.value,
    });
  };

  setPackSize = (event) => {
    this.setState({
      packSize: event.target.value,
    });
  };

  render() {
    return (
      <div className="single-roll-container">
        <img src={this.state.img} alt={this.state.type}/>
        <span className="roll-name bold">{this.state.type}</span>

        <section className="glazing-container">
          <label htmlFor={`glazing-${this.state.attrName}`} className="input-label">Glazing:</label>
          <select
            id={`glazing-${this.state.attrName}`}
            name={`glazing-${this.state.attrName}`}
            className="right-content glazing"
            onChange={this.setGlazing}
          >
            <option value="0.0">Keep original</option>
            <option value="0.0">Sugar milk</option>
            <option value="0.5">Vanilla milk</option>
            <option value="1.5">Double chocolate</option>
          </select>
        </section>

        <section className="pack-size-container">
          <span className="input-label">Pack size:</span>
          <span className="right-content pack-size">
            <span>
              <input
                type="radio"
                id={`${this.state.attrName}-1`}
                name={this.state.attrName}
                value="1"
                onChange={this.setPackSize}
                defaultChecked
              />
              <label htmlFor={`${this.state.attrName}-1`}>1</label>
            </span>

            <span>
              <input
                type="radio"
                id={`${this.state.attrName}-3`}
                name={this.state.attrName}
                value="3"
                onChange={this.setPackSize}
              />
              <label htmlFor={`${this.state.attrName}-3`}>3</label>
            </span>

            <span>
              <input
                type="radio"
                id={`${this.state.attrName}-6`}
                name={this.state.attrName}
                value="5"
                onChange={this.setPackSize}
              />
              <label htmlFor={`${this.state.attrName}-6`}>6</label>
            </span>

            <span>
              <input
                type="radio"
                id={`${this.state.attrName}-12`}
                name={this.state.attrName}
                value="10"
                onChange={this.setPackSize}
              />
              <label htmlFor={`${this.state.attrName}-12`}>12</label>
            </span>
          </span>
        </section>

        <section className="price-container">
          <span className="bold">{`$ ${this.computePrice()}`}</span>
          <button className="right-content add-to-cart bold" type="button">Add to Cart</button>
        </section>
      </div>
    );
  }
}

export default Roll;