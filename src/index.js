import css from './styles/style.css';

const content = document.querySelector('.content');

const header = document.createElement('div');
header.classList.add('header');
content.appendChild(header);

const ribbon = document.createElement('div');
ribbon.classList.add('ribbon');
header.appendChild(ribbon);

const logo = document.createElement('div');
logo.classList.add('logo');
logo.innerHTML = 'Juicy Chicken';
header.appendChild(logo);


const main = document.createElement('div');
main.classList.add('main');

const footer = document.createElement('div');
footer.classList.add('footer');
