import css from './styles/footer.css';
import Insta from './icons/instagram.png';
import Fb from './icons/facebook.png';
import Twitter from './icons/twitter.png';
import Apple from './icons/apple-store-badge.svg';
import Google from './icons/google-play-badge.png';

export default function printwrapper() {

  const footer = document.querySelector('.footer');

  const wrapper = document.createElement('div');
  wrapper.classList.add('footer-wrapper');
  footer.appendChild(wrapper);

  // List
  const links = document.createElement('ul');
  links.classList.add('footer-links');
  links.classList.add('footer-modules');
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

  // About
  const infoWrapper = document.createElement('div');
  infoWrapper.classList.add('info');
  infoWrapper.classList.add('footer-modules');
  wrapper.appendChild(infoWrapper);

  const about = document.createElement('div');
  about.classList.add('connect');
  about.innerHTML = 'ABOUT';
  infoWrapper.appendChild(about);

  const infoGrid = document.createElement('div');
  infoGrid.classList.add('info-grid');
  infoWrapper.appendChild(infoGrid);

  const box1 = document.createElement('div');
  box1.classList.add('about-box');
  infoGrid.appendChild(box1);

  const values = document.createElement('a');
  values.setAttribute('href', '');
  values.classList.add('about-links');
  values.innerHTML = 'Our Values';
  box1.appendChild(values);

  const box2 = document.createElement('div');
  box2.classList.add('about-box');
  infoGrid.appendChild(box2);

  const investors = document.createElement('a');
  investors.setAttribute('href', '');
  investors.classList.add('about-links');
  investors.innerHTML = 'Investors';
  box2.appendChild(investors);

  const box3 = document.createElement('div');
  box3.classList.add('about-box');
  infoGrid.appendChild(box3);

  const cultivate = document.createElement('a');
  cultivate.setAttribute('href', '');
  cultivate.classList.add('about-links');
  cultivate.innerHTML = 'Cultivate Foundation';
  box3.appendChild(cultivate);

  const box4 = document.createElement('div');
  box4.classList.add('about-box');
  infoGrid.appendChild(box4);

  const locations = document.createElement('a');
  locations.setAttribute('href', '');
  locations.classList.add('about-links');
  locations.innerHTML = 'All Locations';
  box4.appendChild(locations);

  const box5 = document.createElement('div');
  box5.classList.add('about-box');
  infoGrid.appendChild(box5);

  const sell = document.createElement('a');
  sell.setAttribute('href', '');
  sell.classList.add('about-links');
  sell.innerHTML = 'Do Not Sell My Information';
  box5.appendChild(sell);

  // Social
  const social = document.createElement('div');
  social.classList.add('social');
  social.classList.add('footer-modules');
  wrapper.appendChild(social);

  const connect = document.createElement('div');
  connect.classList.add('connect');
  connect.innerHTML = 'CONNECT WITH US';
  social.appendChild(connect);

  const socialIcons = document.createElement('div');
  socialIcons.classList.add('social-icons');
  social.appendChild(socialIcons);

  const instaLink = document.createElement('a');
  instaLink.setAttribute('href', '');
  socialIcons.appendChild(instaLink);

  const insta = new Image();
  insta.src = Insta;
  insta.classList.add('icon');
  instaLink.appendChild(insta);

  const fbLink = document.createElement('a');
  fbLink.setAttribute('href', '');
  socialIcons.appendChild(fbLink);

  const fb = new Image();
  fb.src = Fb;
  fb.classList.add('icon');
  fbLink.appendChild(fb);

  const twitterLink = document.createElement('a');
  twitterLink.setAttribute('href', '');
  socialIcons.appendChild(twitterLink);

  const twit = new Image();
  twit.src = Twitter;
  twit.classList.add('icon');
  twitterLink.appendChild(twit);

  // Download
  const downloadWrap = document.createElement('div');
  downloadWrap.classList.add('footer-modules');
  downloadWrap.classList.add('download-wrap');
  wrapper.appendChild(downloadWrap);
  
  const download = document.createElement('div');
  download.classList.add('connect');
  download.innerHTML = 'DOWNLOAD OUR APP';
  downloadWrap.appendChild(download);

  const dlButtons = document.createElement('div');
  dlButtons.classList.add('dl-buttons');
  downloadWrap.appendChild(dlButtons);
  
  const appleLink = document.createElement('a');
  appleLink.setAttribute('href', '');
  dlButtons.appendChild(appleLink);

  const apple = new Image();
  apple.src = Apple;
  apple.classList.add('apple');
  appleLink.appendChild(apple);

  const googleLink = document.createElement('a');
  googleLink.setAttribute('href', '');
  dlButtons.appendChild(googleLink);
  
  const google = new Image();
  google.src = Google;
  google.classList.add('google');
  googleLink.appendChild(google);

  // Bottom
  const bottom = document.createElement('div');
  bottom.classList.add('bottom-wrap');
  bottom.classList.add('footer-modules');
  wrapper.appendChild(bottom);

  const div1 = document.createElement('div');
  div1.classList.add('copy');
  bottom.appendChild(div1);

  const copyright = document.createElement('a');
  copyright.setAttribute('href', '');
  copyright.classList.add('bottom-links');
  copyright.innerHTML = '© 2022 FoodBurger';
  div1.appendChild(copyright);

  const div2 = document.createElement('div');
  div2.classList.add('bottom-div');
  bottom.appendChild(div2);

  const terms = document.createElement('a');
  terms.setAttribute('href', '');
  terms.classList.add('bottom-links');
  terms.innerHTML = 'Terms of Use';
  div2.appendChild(terms);

  const div3 = document.createElement('div');
  div3.classList.add('bottom-div');
  bottom.appendChild(div3);

  const accessibility = document.createElement('a');
  accessibility.setAttribute('href', '');
  accessibility.classList.add('bottom-links');
  accessibility.innerHTML = 'Accessibility Statement';
  div3.appendChild(accessibility);
  
  const div4 = document.createElement('div');
  div4.classList.add('bottom-div');
  bottom.appendChild(div4);

  const privacy = document.createElement('a');
  privacy.setAttribute('href', '');
  privacy.classList.add('bottom-links');
  privacy.innerHTML = 'Privacy Policy';
  div4.appendChild(privacy);
  
  const div5 = document.createElement('div');
  div5.classList.add('bottom-div');
  bottom.appendChild(div5);

  const cookie = document.createElement('a');
  cookie.setAttribute('href', '');
  cookie.classList.add('bottom-links');
  cookie.innerHTML = 'Cookie Preferences';
  div5.appendChild(cookie);
}
