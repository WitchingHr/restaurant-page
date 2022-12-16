import css from './styles/menu.css';

const menu = {
  lunch: [
    {
      plate: 'The Gregory Burger',
      description: 'The juiciest burger to please all Gregs!',
      ingredients: ''
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

  const menuWrapper = document.createElement('div');
  menuWrapper.classList.add('menu-container');
  main.appendChild(menuWrapper);

  const lunch = document.createElement('div');
  lunch.classList.add('lunch');
  menuWrapper.appendChild(lunch);

  const lunchHeader = document.createElement('div');
  lunchHeader.classList.add('meal-header');
  lunchHeader.innerHTML = 'LUNCH';
  lunch.appendChild(lunchHeader);

  menu.lunch.forEach(item => {
    const plate = document.createElement('div');
    plate.classList.add('plate');
    lunch.appendChild(plate);

    const title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML = item.plate;
    plate.appendChild(title);

    const price = document.createElement('span');
    price.classList.add('price');
    price.innerHTML = item.price;
    title.appendChild(price);

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

  menu.dinner.forEach(item => {
    const plate = document.createElement('div');
    plate.classList.add('plate');
    dinner.appendChild(plate);

    const title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML = item.plate;
    plate.appendChild(title);

    const price = document.createElement('span');
    price.classList.add('price');
    price.innerHTML = item.price;
    title.appendChild(price);

    const description = document.createElement('div');
    description.classList.add('description');
    description.innerHTML = item.ingredients;
    plate.appendChild(description);
  });
}