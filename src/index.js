import css from './styles/style.css';
import Logo from './logo.png';
import Cut from './CutOut.png';

// Content wrapper
const content = document.querySelector('.content');

// Header
const header = document.createElement('div');
header.classList.add('header');
content.appendChild(header);

const logo = document.createElement('div');
logo.classList.add('logo');
header.appendChild(logo);

const logoPng = new Image();
logoPng.src = Logo;
logo.appendChild(logoPng);

const cut = document.createElement('div');
cut.classList.add('cut');
header.appendChild(cut);

const cutPng = new Image();
cutPng.src = Cut;
cut.appendChild(cutPng);

// Navbar
const nav = document.createElement('div');
nav.classList.add('nav');
content.appendChild(nav);

const menuBtn = document.createElement('button');
menuBtn.innerHTML = 'MENU';
menuBtn.classList.add('navBtn');
nav.appendChild(menuBtn);

const contactBtn = document.createElement('button');
contactBtn.innerHTML = 'CONTACT';
contactBtn.classList.add('navBtn');
nav.appendChild(contactBtn);

// Main
const main = document.createElement('div');
main.classList.add('main');

// Footer
const footer = document.createElement('div');
footer.classList.add('footer');
