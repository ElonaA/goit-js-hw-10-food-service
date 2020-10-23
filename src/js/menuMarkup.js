import menuCardsTemplate from '../templates/menu-cards.hbs';
import menu from '../collections/menu.json';

const menuContainer = document.querySelector('ul.js-menu');

const cardsMarkup = menuCardsTemplate(menu);

menuContainer.insertAdjacentHTML('beforeend', cardsMarkup);