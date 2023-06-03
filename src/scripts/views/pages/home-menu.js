import MenuSource from '../../data/menu-source';
import { createRestoItemTemplate } from '../templates/template.creator';

import '../../component/resto-list';

const HomeMenu = {
  async render() {
    return `
        <resto-list></resto-list>
        `;
  },
  async afterRender() {
    const menu = await MenuSource.homeMenu();
    const restaurantsContainer = document.querySelector('#resto-list');
    menu.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};
export default HomeMenu;
