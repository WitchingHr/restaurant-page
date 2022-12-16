import css from './styles/menu.css';

const menu = {
  appetizers: [
    {
      plate: 'Bang Bang Steak Tips',
      price: 18,
      ingredients: 'fried broccoli, crispy steak tips, orange sesame glaze, scallions'
    },
    {
      plate: 'Parmesan Truffle Fries',
      price: 10,
      ingredients: ''
    },
    {
      plate: 'Hand Dipped Onion Rings',
      price: 14,
      ingredients: ''
    },
    {
      plate: 'French Onion Soup',
      price: 9,
      ingredients: ''
    },
    {
      plate: 'Crispy Calamari',
      price: 15,
      ingredients: 'Cherry pepper ranch'
    },
    {
      plate: 'Spinach & Artichoke Dip',
      price: 17,
      ingredients: 'Seasoned vita chips'
    },
    {
      plate: 'Jumbo Shrimp Cocktail',
      price: 12,
      ingredients: ''
    },
    {
      plate: 'Baked Local Oysters',
      price: 16,
      ingredients: 'Chorizo, sage butter, herbed crumbs'
    },
    {
      plate: 'Ranch Potato Chips',
      price: 8,
      ingredients: 'Roasted garlic & chive'
    },
  ],
  dinner: [
    {
      plate: 'The GOAT Burger', 
      price: 17,
      ingredients: 'American cheese, pickles, yellow mustard, ketchup, red onion'
    },
    {
      plate: 'Bacon and Egg Burger', 
      price: 18,
      ingredients: 'Cherrywood smoked bacon, pepper jack cheese, fried egg'
    },
    {
      plate: 'Steakhouse Burger', 
      price: 18,
      ingredients: 'House steak sauce, Monterey Jack cheese, cherrywood smoked bacon, crispy fried onion strings'
    },
    {
      plate: 'BBQ Burger', 
      price: 18,
      ingredients: 'Cherrywood smoked bacon, lettuce, tomato, hand dipped onion ring, on a toasted pretzel bun'
    },
    {
      plate: 'Gorgonzola Burger', 
      price: 18,
      ingredients: 'Gorgonzola and caramelized onion jam burger, bacon'
    },
    {
      plate: 'French Dip', 
      price: 18,
      ingredients: 'Demi baguette, horseradish sour cream, gruyere, au jus'
    },
    {
      plate: 'Herb Grilled Chicken', 
      price: 17,
      ingredients: 'Dunks mushrooms, Swiss cheese, Boursin cheese, lettuce, tomato, on a toasted pretzel bun'
    },
  ]
};

export default function printMenu() {
  const main = document.querySelector('.main');

  main.innerHTML = '';

  const menuWrapper = document.createElement('div');
  menuWrapper.classList.add('menu-container');
  main.appendChild(menuWrapper);

  const appetizers = document.createElement('div');
  appetizers.classList.add('appetizers');
  menuWrapper.appendChild(appetizers);

  const appetizersHeader = document.createElement('div');
  appetizersHeader.classList.add('meal-header');
  appetizersHeader.innerHTML = 'APPETIZERS';
  appetizers.appendChild(appetizersHeader);

  const appContainer = document.createElement('div');
  appContainer.classList.add('app-container');
  appetizers.appendChild(appContainer);

  menu.appetizers.forEach(item => {
    const plate = document.createElement('div');
    plate.classList.add('plate');
    appContainer.appendChild(plate);

    const title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML = item.plate;
    plate.appendChild(title);

    const price = document.createElement('span');
    price.classList.add('price');
    price.innerHTML = item.price;
    title.appendChild(price);

    const line = document.createElement('hr');
    plate.appendChild(line);

    const description = document.createElement('div');
    description.classList.add('description');
    description.innerHTML = item.ingredients;
    plate.appendChild(description);
  });

  const dinner = document.createElement('div');
  dinner.classList.add('dinner');
  menuWrapper.appendChild(dinner);

  const dinnerHeader = document.createElement('div');
  dinnerHeader.classList.add('meal-header');
  dinnerHeader.innerHTML = 'DINNER';
  dinner.appendChild(dinnerHeader);

  const dinContainer = document.createElement('div');
  dinContainer.classList.add('din-container');
  dinner.appendChild(dinContainer);

  menu.dinner.forEach(item => {
    const plate = document.createElement('div');
    plate.classList.add('plate');
    dinContainer.appendChild(plate);

    const title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML = item.plate;
    plate.appendChild(title);

    const price = document.createElement('span');
    price.classList.add('price');
    price.innerHTML = item.price;
    title.appendChild(price);

    const line = document.createElement('hr');
    plate.appendChild(line);
    
    const description = document.createElement('div');
    description.classList.add('description');
    description.innerHTML = item.ingredients;
    plate.appendChild(description);
  });
}