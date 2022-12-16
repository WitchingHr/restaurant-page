const menu = {
  lunch: [
    {
      plate: 'The Gregory Burger',
      description: 'The juiciest burger to please all Gregs!'
    },
  ],
  dinner: [
    {
      plate: 'The GOAT Burger', 
      description: 'The Original Hall of Famer. Loved by all.'
    },
  ]
};

export default function printMenu() {
  const main = document.querySelector('.main');

  const menuWrapper = document.createElement('div');
  menuWrapper.classList.add('menu');
  main.appendChild(menuWrapper);
}