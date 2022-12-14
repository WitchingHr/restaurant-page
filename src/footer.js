import Insta from './icons/instagram.png';
import Fb from './icons/facebook.png';
import Twitter from './icons/twitter.png';

export default function printFooter() {
  const footer = document.querySelector('.footer');

  // List
  const links = document.createElement('ul');
  links.classList.add('footer-links');
  footer.appendChild(links);

  const contactLi = document.createElement('li');
  links.appendChild(contactLi);

  const contact = document.createElement('a');
  contact.setAttribute('href', '');
  contact.innerHTML = 'CONTACT US';
  contactLi.appendChild(contact);

  const careersLi = document.createElement('li');
  links.appendChild(careersLi);

  const careers = document.createElement('a');
  careers.setAttribute('href', '');
  careers.innerHTML = 'CAREERS';
  careersLi.appendChild(careers);

  // Social
  const social = document.createElement('div');
  social.classList.add('social');
  footer.appendChild(social);

  const connect = document.createElement('div');
  connect.classList.add('connect');
  connect.innerHTML = 'CONNECT WITH US';
  social.appendChild(connect);

  const socialIcons = document.createElement('div');
  socialIcons.classList.add('social-icons');
  social.appendChild(socialIcons);

  const insta = new Image();
  insta.src = Insta;
  insta.classList.add('icon');
  socialIcons.appendChild(insta);

  const fb = new Image();
  fb.src = Fb;
  fb.classList.add('icon');
  socialIcons.appendChild(fb);

  const twit = new Image();
  twit.src = Twitter;
  twit.classList.add('icon');
  socialIcons.appendChild(twit);
}
