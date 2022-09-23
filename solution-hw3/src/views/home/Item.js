/* Renders each individual item i.e. one block of roll - image, text, packsize, glazing and price */
const Item = ({name, attrName, price, img}) => {
  return (
    <div className="single-roll-container">
      <img src={img} alt={name}/>
      <span className="roll-name bold">{name}</span>

      <section className="glazing-container">
        <label htmlFor={`glazing-${attrName}`} className="input-label">Glazing:</label>
        <select
          id={`glazing-${attrName}`}
          name={`glazing-${attrName}`}
          className="right-content glazing"
        >
          <option value="keep-original">Keep original</option>
          <option value="sugar-milk">Sugar milk</option>
          <option value="vanilla-milk">Vanilla milk</option>
          <option value="double-chocolate">Double chocolate</option>
        </select>
      </section>

      <section className="pack-size-container">
        <span className="input-label">Pack size:</span>
        <span className="right-content pack-size">
          <span>
            <input type="radio" id={`${attrName}-1`} name={attrName} value="1" defaultChecked />
            <label htmlFor={`${attrName}-1`}>1</label>
          </span>

          <span>
            <input type="radio" id={`${attrName}-3`} name={attrName} value="3" />
            <label htmlFor={`${attrName}-3`}>3</label>
          </span>

          <span>
            <input type="radio" id={`${attrName}-6`} name={attrName} value="6" />
            <label htmlFor={`${attrName}-6`}>6</label>
          </span>

          <span>
            <input type="radio" id={`${attrName}-12`} name={attrName} value="12" />
            <label htmlFor={`${attrName}-12`}>12</label>
          </span>
        </span>
      </section>

      <section className="price-container">
        <span className="bold">{price}</span>
        <button className="right-content add-to-cart bold">Add to Cart</button>
      </section>
    </div>
  );
}

export default Item;