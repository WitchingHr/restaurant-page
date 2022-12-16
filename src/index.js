import menu from './menu';
import address from './address';
import foot from './footer';
import css from './styles/style.css';
import Logo from './icons/logo.png';
import Cut from './icons/CutOut.png';

// Content wrapper
const content = document.querySelector('.content');

// Header
const header = document.createElement('div');
header.classList.add('header');
content.appendChild(header);

const logo = document.createElement('div');
logo.classList.add('logo');
header.appendChild(logo);

const logoLink = document.createElement('a');
logoLink.setAttribute('href', '');
logo.appendChild(logoLink);

const logoPng = new Image();
logoPng.src = Logo;
logoPng.classList.add('logo-bar');
logoLink.appendChild(logoPng);

const cut = document.createElement('div');
cut.classList.add('cut');
header.appendChild(cut);

const cutPng = new Image();
cutPng.src = Cut;
cutPng.classList.add('logo-bar')
cut.appendChild(cutPng);

const sideDiv = document.createElement('div');
sideDiv.classList.add('side-div');
header.appendChild(sideDiv);

// Navbar
const nav = document.createElement('div');
nav.classList.add('nav');
content.appendChild(nav);

const menuBtn = document.createElement('button');
menuBtn.innerHTML = 'MENU';
menuBtn.classList.add('nav-btn');
menuBtn.addEventListener('click', menu);
nav.appendChild(menuBtn);

const addressBtn = document.createElement('button');
addressBtn.innerHTML = 'ADDRESS';
addressBtn.classList.add('nav-btn');
addressBtn.addEventListener('click', address);
nav.appendChild(addressBtn);

// Main
const main = document.createElement('div');
main.classList.add('main');
content.appendChild(main);

menu();

// Footer
const footer = document.createElement('div');
footer.classList.add('footer');
content.appendChild(footer);
foot();