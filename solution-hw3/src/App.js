import './assets/common.css';
import './assets/main.css';
import './assets/nav-header.css';

import logo from './assets/imgs/logo.svg';
import originalCinnamonRoll from './assets/imgs/original-cinnamon-roll.jpg';
import appleCinnamonRoll from './assets/imgs/apple-cinnamon-roll.jpg';
import raisinCinnamonRoll from './assets/imgs/raisin-cinnamon-roll.jpg';
import walnutCinnamonRoll from './assets/imgs/walnut-cinnamon-roll.jpg';
import doubleChocolateCinnamonRoll from './assets/imgs/double-chocolate-cinnamon-roll.jpg';
import strawberryCinnamonRoll from './assets/imgs/strawberry-cinnamon-roll.jpg';
import glutenFreeCinnamonRoll from './assets/imgs/gluten-free-cinnamon-roll.jpg';
import vanillaCinnamonRoll from './assets/imgs/vanilla-cinnamon-roll.jpg';

function App() {
  return (
    <div className="App">
      {/* Contains the header element with logo and navigation section */}
      <div className="nav-header">
        <img src={logo}  alt="Bun Bun bake shop logo"/>
        <nav className="nav-options">
          <div className="options">
            <a href="#" className="products">PRODUCTS</a>
            <a href="#" className="cart">CART</a>
          </div>
          <hr />
          <div className="heading">Our hand-made cinnamon rolls</div>
        </nav>
      </div>

      {/* Contains the main text / body for the content */}
      <main className="rolls-container">
        {/* Each div contains one block of each roll */}
        <div className="single-roll-container">
          <img src={originalCinnamonRoll} alt="Original Cinnamon Roll"/>
          <span className="roll-name bold">Original cinnamon roll</span>

          <section className="glazing-container">
            <label htmlFor="glazing-original-cinnamon-roll" className="input-label">Glazing:</label>
            <select
              id="glazing-original-cinnamon-roll"
              name="glazing-original-cinnamon-roll"
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
                <input type="radio" id="original-cinnamon-roll-1" name="original-cinnamon-roll" value="1" defaultChecked />
                <label htmlFor="original-cinnamon-roll-1">1</label>
              </span>

              <span>
                <input type="radio" id="original-cinnamon-roll-3" name="original-cinnamon-roll" value="3" />
                <label htmlFor="original-cinnamon-roll-3">3</label>
              </span>

              <span>
                <input type="radio" id="original-cinnamon-roll-6" name="original-cinnamon-roll" value="6" />
                <label htmlFor="original-cinnamon-roll-6">6</label>
              </span>

              <span>
                <input type="radio" id="original-cinnamon-roll-12" name="original-cinnamon-roll" value="12" />
                <label htmlFor="original-cinnamon-roll-12">12</label>
              </span>
            </span>
          </section>

          <section className="price-container">
            <span className="bold">$ 2.49</span>
            <button className="right-content add-to-cart bold">Add to Cart</button>
          </section>
        </div>

        <div className="single-roll-container">
          <img src={appleCinnamonRoll} alt="Apple Cinnamon Roll"/>
          <span className="roll-name bold">Apple cinnamon roll</span>

          <section className="glazing-container">
            <label htmlFor="glazing-apple-cinnamon-roll" className="input-label">Glazing:</label>
            <select
              id="glazing-apple-cinnamon-roll"
              name="glazing-apple-cinnamon-roll"
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
                <input type="radio" id="apple-cinnamon-roll-1" name="apple-cinnamon-roll" value="1" defaultChecked />
                <label htmlFor="apple-cinnamon-roll-1">1</label>
              </span>

              <span>
                <input type="radio" id="apple-cinnamon-roll-3" name="apple-cinnamon-roll" value="3" />
                <label htmlFor="apple-cinnamon-roll-3">3</label>
              </span>

              <span>
                <input type="radio" id="apple-cinnamon-roll-6" name="apple-cinnamon-roll" value="6" />
                <label htmlFor="apple-cinnamon-roll-6">6</label>
              </span>

              <span>
                <input type="radio" id="apple-cinnamon-roll-12" name="apple-cinnamon-roll" value="12" />
                <label htmlFor="apple-cinnamon-roll-12">12</label>
              </span>
            </span>
          </section>

          <section className="price-container">
            <span className="bold">$ 3.49</span>
            <button className="right-content add-to-cart bold">Add to Cart</button>
          </section>
        </div>

        <div className="single-roll-container">
          <img src={raisinCinnamonRoll} alt="Raisin Cinnamon Roll"/>
          <span className="roll-name bold">Raisin cinnamon roll</span>

          <section className="glazing-container">
            <label htmlFor="glazing-raisin-cinnamon-roll" className="input-label">Glazing:</label>
            <select
              id="glazing-raisin-cinnamon-roll"
              name="glazing-raisin-cinnamon-roll"
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
                <input type="radio" id="raisin-cinnamon-roll-1" name="raisin-cinnamon-roll" value="1" defaultChecked />
                <label htmlFor="raisin-cinnamon-roll-1">1</label>
              </span>

              <span>
                <input type="radio" id="raisin-cinnamon-roll-3" name="raisin-cinnamon-roll" value="3" />
                <label htmlFor="raisin-cinnamon-roll-3">3</label>
              </span>

              <span>
                <input type="radio" id="raisin-cinnamon-roll-6" name="raisin-cinnamon-roll" value="6" />
                <label htmlFor="raisin-cinnamon-roll-6">6</label>
              </span>

              <span>
                <input type="radio" id="raisin-cinnamon-roll-12" name="raisin-cinnamon-roll" value="12" />
                <label htmlFor="raisin-cinnamon-roll-12">12</label>
              </span>
            </span>
          </section>

          <section className="price-container">
            <span className="bold">$ 2.99</span>
            <button className="right-content add-to-cart bold">Add to Cart</button>
          </section>
        </div>

        <div className="single-roll-container">
          <img src={walnutCinnamonRoll} alt="Walnut Cinnamon Roll"/>
          <span className="roll-name bold">Walnut cinnamon roll</span>

          <section className="glazing-container">
            <label htmlFor="glazing-walnut-cinnamon-roll" className="input-label">Glazing:</label>
            <select
              id="glazing-walnut-cinnamon-roll"
              name="glazing-walnut-cinnamon-roll"
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
                <input type="radio" id="walnut-cinnamon-roll-1" name="walnut-cinnamon-roll" value="1" defaultChecked />
                <label htmlFor="walnut-cinnamon-roll-1">1</label>
              </span>

              <span>
                <input type="radio" id="walnut-cinnamon-roll-3" name="walnut-cinnamon-roll" value="3" />
                <label htmlFor="walnut-cinnamon-roll-3">3</label>
              </span>

              <span>
                <input type="radio" id="walnut-cinnamon-roll-6" name="walnut-cinnamon-roll" value="6" />
                <label htmlFor="walnut-cinnamon-roll-6">6</label>
              </span>

              <span>
                <input type="radio" id="walnut-cinnamon-roll-12" name="walnut-cinnamon-roll" value="12" />
                <label htmlFor="walnut-cinnamon-roll-12">12</label>
              </span>
            </span>
          </section>

          <section className="price-container">
            <span className="bold">$ 3.49</span>
            <button className="right-content add-to-cart bold">Add to Cart</button>
          </section>
        </div>

        <div className="single-roll-container">
          <img src={doubleChocolateCinnamonRoll} alt="Double-chocolate Cinnamon Roll"/>
          <span className="roll-name bold">Double-chocolate cinnamon roll</span>

          <section className="glazing-container">
            <label htmlFor="glazing-double-chocolate-cinnamon-roll" className="input-label">Glazing:</label>
            <select
              id="glazing-double-chocolate-cinnamon-roll"
              name="glazing-double-chocolate-cinnamon-roll"
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
                <input type="radio" id="double-chocolate-cinnamon-roll-1" name="double-chocolate-cinnamon-roll" value="1" defaultChecked />
                <label htmlFor="double-chocolate-cinnamon-roll-1">1</label>
              </span>

              <span>
                <input type="radio" id="double-chocolate-cinnamon-roll-3" name="double-chocolate-cinnamon-roll" value="3" />
                <label htmlFor="double-chocolate-cinnamon-roll-3">3</label>
              </span>

              <span>
                <input type="radio" id="double-chocolate-cinnamon-roll-6" name="double-chocolate-cinnamon-roll" value="6" />
                <label htmlFor="double-chocolate-cinnamon-roll-6">6</label>
              </span>

              <span>
                <input type="radio" id="double-chocolate-cinnamon-roll-12" name="double-chocolate-cinnamon-roll" value="12" />
                <label htmlFor="double-chocolate-cinnamon-roll-12">12</label>
              </span>
            </span>
          </section>

          <section className="price-container">
            <span className="bold">$ 3.99</span>
            <button className="right-content add-to-cart bold">Add to Cart</button>
          </section>
        </div>

        <div className="single-roll-container">
          <img src={strawberryCinnamonRoll} alt="Strawberry Cinnamon Roll"/>
          <span className="roll-name bold">Strawberry cinnamon roll</span>

          <section className="glazing-container">
            <label htmlFor="glazing-strawberry-cinnamon-roll" className="input-label">Glazing:</label>
            <select
              id="glazing-strawberry-cinnamon-roll"
              name="glazing-strawberry-cinnamon-roll"
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
                <input type="radio" id="strawberry-cinnamon-roll-1" name="strawberry-cinnamon-roll" value="1" defaultChecked />
                <label htmlFor="strawberry-cinnamon-roll-1">1</label>
              </span>

              <span>
                <input type="radio" id="strawberry-cinnamon-roll-3" name="strawberry-cinnamon-roll" value="3" />
                <label htmlFor="strawberry-cinnamon-roll-3">3</label>
              </span>

              <span>
                <input type="radio" id="strawberry-cinnamon-roll-6" name="strawberry-cinnamon-roll" value="6" />
                <label htmlFor="strawberry-cinnamon-roll-6">6</label>
              </span>

              <span>
                <input type="radio" id="strawberry-cinnamon-roll-12" name="strawberry-cinnamon-roll" value="12" />
                <label htmlFor="strawberry-cinnamon-roll-12">12</label>
              </span>
            </span>
          </section>

          <section className="price-container">
            <span className="bold">$ 3.99</span>
            <button className="right-content add-to-cart bold">Add to Cart</button>
          </section>
        </div>

        <div className="single-roll-container">
          <img src={glutenFreeCinnamonRoll} alt="Gluten-free Cinnamon Roll"/>
          <span className="roll-name bold">Gluten-free cinnamon roll</span>

          <section className="glazing-container">
            <label htmlFor="glazing-gluten-free-cinnamon-roll" className="input-label">Glazing:</label>
            <select
              id="glazing-gluten-free-cinnamon-roll"
              name="glazing-gluten-free-cinnamon-roll"
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
                <input type="radio" id="gluten-free-cinnamon-roll-1" name="gluten-free-cinnamon-roll" value="1" defaultChecked />
                <label htmlFor="gluten-free-cinnamon-roll-1">1</label>
              </span>

              <span>
                <input type="radio" id="gluten-free-cinnamon-roll-3" name="gluten-free-cinnamon-roll" value="3" />
                <label htmlFor="gluten-free-cinnamon-roll-3">3</label>
              </span>

              <span>
                <input type="radio" id="gluten-free-cinnamon-roll-6" name="gluten-free-cinnamon-roll" value="6" />
                <label htmlFor="gluten-free-cinnamon-roll-6">6</label>
              </span>

              <span>
                <input type="radio" id="gluten-free-cinnamon-roll-12" name="gluten-free-cinnamon-roll" value="12" />
                <label htmlFor="gluten-free-cinnamon-roll-12">12</label>
              </span>
            </span>
          </section>

          <section className="price-container">
            <span className="bold">$ 4.09</span>
            <button className="right-content add-to-cart bold">Add to Cart</button>
          </section>
        </div>

        <div className="single-roll-container">
          <img src={vanillaCinnamonRoll} alt="Vanilla Cinnamon Roll"/>
          <span className="roll-name bold">Vanilla cinnamon roll</span>

          <section className="glazing-container">
            <label htmlFor="glazing-vanilla-cinnamon-roll" className="input-label">Glazing:</label>
            <select
              id="glazing-vanilla-cinnamon-roll"
              name="glazing-vanilla-cinnamon-roll"
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
                <input type="radio" id="vanilla-cinnamon-roll-1" name="vanilla-cinnamon-roll" value="1" defaultChecked />
                <label htmlFor="vanilla-cinnamon-roll-1">1</label>
              </span>

              <span>
                <input type="radio" id="vanilla-cinnamon-roll-3" name="vanilla-cinnamon-roll" value="3" />
                <label htmlFor="vanilla-cinnamon-roll-3">3</label>
              </span>

              <span>
                <input type="radio" id="vanilla-cinnamon-roll-6" name="vanilla-cinnamon-roll" value="6" />
                <label htmlFor="vanilla-cinnamon-roll-6">6</label>
              </span>

              <span>
                <input type="radio" id="vanilla-cinnamon-roll-12" name="vanilla-cinnamon-roll" value="12" />
                <label htmlFor="vanilla-cinnamon-roll-12">12</label>
              </span>
            </span>
          </section>

          <section className="price-container">
            <span className="bold">$ 3.49</span>
            <button className="right-content add-to-cart bold">Add to Cart</button>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
