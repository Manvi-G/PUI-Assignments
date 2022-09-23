import '../../assets/items.css';

import originalCinnamonRoll from '../../assets/imgs/original-cinnamon-roll.jpg';
import appleCinnamonRoll from '../../assets/imgs/apple-cinnamon-roll.jpg';
import raisinCinnamonRoll from '../../assets/imgs/raisin-cinnamon-roll.jpg';
import walnutCinnamonRoll from '../../assets/imgs/walnut-cinnamon-roll.jpg';
import doubleChocolateCinnamonRoll from '../../assets/imgs/double-chocolate-cinnamon-roll.jpg';
import strawberryCinnamonRoll from '../../assets/imgs/strawberry-cinnamon-roll.jpg';
import glutenFreeCinnamonRoll from '../../assets/imgs/gluten-free-cinnamon-roll.jpg';
import vanillaCinnamonRoll from '../../assets/imgs/vanilla-cinnamon-roll.jpg';

// import { Item } from './Item';
import Item from './Item';

/* Contains the main text / body for the content */
function Items() {
  // Array of roll objects (all rolls offered by comapany)
  const rolls = [
    {
      name: 'Original cinnamon roll',
      attrName: 'original-cinnamon-roll',
      price: '$ 2.49',
      img: originalCinnamonRoll,
    },
    {
      name: 'Apple cinnamon roll',
      attrName: 'apple-cinnamon-roll',
      price: '$ 3.49',
      img: appleCinnamonRoll,
    },
    {
      name: 'Raisin cinnamon roll',
      attrName: 'raisin-cinnamon-roll',
      price: '$ 2.99',
      img: raisinCinnamonRoll,
    },
    {
      name: 'Walnut cinnamon roll',
      attrName: 'walnut-cinnamon-roll',
      price: '$ 3.49',
      img: walnutCinnamonRoll,
    },
    {
      name: 'Double-chocolate cinnamon roll',
      attrName: 'double-chocolate-cinnamon-roll',
      price: '$ 3.99',
      img: doubleChocolateCinnamonRoll,
    },
    {
      name: 'Strawberry cinnamon roll',
      attrName: 'strawberry-cinnamon-roll',
      price: '$ 3.99',
      img: strawberryCinnamonRoll,
    },
    {
      name: 'Gluten-free cinnamon roll',
      attrName: 'gluten-free-cinnamon-roll',
      price: '$ 4.09',
      img: glutenFreeCinnamonRoll,
    },
    {
      name: 'Vanilla cinnamon roll',
      attrName: 'vanilla-cinnamon-roll',
      price: '$ 3.49',
      img: vanillaCinnamonRoll,
    },
  ];

  // Constant containing all the individual divs of rolls
  const allRollElements = [];

  // Looping through the rolls array to create similar Items with different attributes (individual divs) and adding it to our constant
  rolls.forEach((roll) => {
    allRollElements.push(<Item {...roll}></Item>);
  });

  return (
    <div className="rolls-container">
      {allRollElements}
    </div>
  );
}

export default Items;
