import '../../assets/navbar.css';

import logo from '../../assets/imgs/logo.svg';

/* Contains the header element with logo and navigation section */
function NavBar() {
  return (
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
  );
}

export default NavBar;
