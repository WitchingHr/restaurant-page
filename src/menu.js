export default function printMenu() {
  const main = document.querySelector('.main');

  const menu = document.createElement('div');
  menu.classList.add('menu');
  main.appendChild(menu);

  const lunch = document.createElement('div');
  lunch.innerHTML = 'burgers';
  menu.appendChild(lunch);
}