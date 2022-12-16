import css from './styles/address.css';

export default function printAddress() {
  const main = document.querySelector('.main');

  main.innerHTML = '';

  const addressWrapper = document.createElement('div');
  addressWrapper.classList.add('address-container');
  main.appendChild(addressWrapper);

  const addContainer = document.createElement('div');
  addContainer.classList.add('add-contain');
  addressWrapper.appendChild(addContainer);

  const located = document.createElement('p');
  located.classList.add('located');
  located.innerHTML = 'LOCATED AT:';
  addContainer.appendChild(located);

  const address = document.createElement('address');
  address.classList.add('address');
  address.innerHTML = '1600 Pennsylvania Avenue NW<br>Washington, DC 20500';
  addContainer.appendChild(address);

  const googleMap = document.createElement('iframe');
  googleMap.classList.add('map');
  googleMap.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.150382269586!2d-77.0391047241496!3d38.89767627172401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bcdecbb1df%3A0x715969d86d0b76bf!2sThe%20White%20House!5e0!3m2!1sen!2sus!4v1671221217075!5m2!1sen!2sus');
  googleMap.setAttribute('width', '100%');
  googleMap.setAttribute('height', '450');
  googleMap.setAttribute('style', 'border:0;');
  googleMap.setAttribute('allowfullscreen', '');
  googleMap.setAttribute('loading', 'lazy');
  googleMap.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
  addressWrapper.appendChild(googleMap);
}