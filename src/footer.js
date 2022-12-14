import css from './styles/footer.css';
import Insta from './icons/instagram.png';
import Fb from './icons/facebook.png';
import Twitter from './icons/twitter.png';

export default function printwrapper() {

  const footer = document.querySelector('.footer');

  const wrapper = document.createElement('div');
  wrapper.classList.add('footer-wrapper');
  footer.appendChild(wrapper);

  // List
  const links = document.createElement('ul');
  links.classList.add('footer-links');
  wrapper.appendChild(links);

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

  const giftLi = document.createElement('li');
  links.appendChild(giftLi);

  const giftCards = document.createElement('a');
  giftCards.setAttribute('href', '');
  giftCards.innerHTML = 'GIFT CARDS';
  giftLi.appendChild(giftCards);

  const fundLi = document.createElement('li');
  links.appendChild(fundLi);

  const fundraising = document.createElement('a');
  fundraising.setAttribute('href', '');
  fundraising.innerHTML = 'FUNDRAISING';
  fundLi.appendChild(fundraising);

  // Social
  const social = document.createElement('div');
  social.classList.add('social');
  wrapper.appendChild(social);

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
