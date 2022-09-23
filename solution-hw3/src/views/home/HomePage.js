import '../../assets/common.css';

import Items from './Items'; /* Parent component for all the items shown on the homePage */
import NavBar from './NavBar'; /* Navigation Bar component */

function HomePage() {
  return (
    <div>
      <NavBar></NavBar>
      <Items></Items>
    </div>
  );
}

export default HomePage;
