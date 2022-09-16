const rolls = {
  original: {
    type: 'Original Cinnamon Roll',
    price: '2.49',
  },
  apple: {
    type: 'Apple Cinnamon Roll',
    price: '3.49',
  },
  raisin: {
    type: 'Raisin Cinnamon Roll',
    price: '2.99',
  },
  walnut: {
    type: 'Walnut Cinnamon Roll',
    price: '3.49',
  },
  doubleChocolate: {
    type: 'Double Chocolate Cinnamon Roll',
    price: '3.99',
  },
  strawberry: {
    type: 'Strawberry Cinnamon Roll',
    price: '3.99',
  },
  glutenFree: {
    type: 'Gluten Free Cinnamon Roll',
    price: '4.09',
  },
  vanilla: {
    type: 'Vanilla Cinnamon Roll',
    price: '3.49',
  },
};
  
const priceAdaptationsForGlazing = [{
  name: 'Keep Original',
  priceAdaption: 0.0,
}, {
  name: 'Sugar Milk',
  priceAdaption: 0.0,
}, {
  name: 'Vanilla Milk',
  priceAdaption: 0.50,
}, {
  name: 'Double Chocolate',
  priceAdaption: 1.50,
}];

const cartItems = {
  totalCost: 0.0,
  items: [],
};

function addDropdownOptions() {
  const allSelectTags = document.getElementsByTagName('select');

  for (let i = 0; i < allSelectTags.length; i++) {
    const individualSelectNode = allSelectTags[i];

    for (let j=0; j<priceAdaptationsForGlazing.length; j++) {
      const option = document.createElement('option');
      option.text = priceAdaptationsForGlazing[j].name;
      option.value = priceAdaptationsForGlazing[j].priceAdaption;
      individualSelectNode.add(option);
    }
  }
}

function addToCart(rollType) {
  const additionalPrice = document.querySelector(`.price-container.${rollType} .price`).textContent;
  const packSize = (document.querySelector(`input[name=${rollType}]:checked`)).value;
  const glazingType = document.querySelector(`.glazing.${rollType}`).name;

  const item = {
    name: rolls[rollType].type,
    type: rollType,
    glazing: `${glazingType} Glazing`,
    packSize: `Pack of ${packSize}`,
    price: `Price: $${additionalPrice}`,
  };

  cartItems.totalCost += Number(additionalPrice);
  cartItems.items.push(item);

  calculateTotalCartValues();
}

function calculateTotalCartValues() {
  const totalItems = cartItems.items.length;

  if(totalItems === 1) {
    document.querySelector('.total-items').textContent = `${totalItems} Item`;
  }
  else {
    document.querySelector('.total-items').textContent = `${totalItems} Items`;
  }
  
  document.querySelector('.total-cost').textContent = `Total: $ ${cartItems.totalCost}`;
}

function onOptionsChange(rollType) {
  const priceChange = document.querySelector(`.glazing.${rollType}`).value; // selected glazing option
  const packSize = (document.querySelector(`input[name=${rollType}]:checked`)).value; // selected pack size

  const singleItemPrice = rolls[rollType].price;
  const newPriceWithGlazing = Number(singleItemPrice) + Number(priceChange);
  const newTotalPrice = (newPriceWithGlazing * packSize).toFixed(2);

  document.querySelector(`.price-container.${rollType} .price`).textContent = newTotalPrice;
}

function updateCartModal () {
  const modalContainer = document.createElement('.modal-container');

  for (let i = 0; i < cartItems.items.length; i++) {
    const spanElement = document.createElement('span');
    spanElement.textContent = cartItems.items[i].name;
    const spanElement2 = document.createElement('span');
    spanElement2.textContent = cartItems.items[i].glazing;
    const spanElement3 = document.createElement('span');
    spanElement3.textContent = cartItems.items[i].packSize;
    const spanElement4 = document.createElement('span');
    spanElement4.textContent = cartItems.items[i].price;

    const brElement = document.createElement('br');

    modalContainer.add(spanElement);
    modalContainer.add(brElement);
    modalContainer.add(spanElement2);
    modalContainer.add(brElement);
    modalContainer.add(spanElement3);
    modalContainer.add(brElement);
    modalContainer.add(spanElement4);
    modalContainer.add(brElement);
  }
}

function onCartClick() {
  document.getElementById('modalContainer').style.display = "block";
  updateCartModal();

  setTimeout(() => {
    document.getElementById('modalContainer').style.display = "none";
  }, 3000);
}

addDropdownOptions();
