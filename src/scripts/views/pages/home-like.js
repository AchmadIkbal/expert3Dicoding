import { createRestoItemTemplate } from '../templates/template.creator';
import FavoriteResto from '../../data/favourite';
import '../../component/resto-like';

const RestauranLike = {
  async render() {
    return `
        <resto-favorite></resto-favorite>`;
  },

  async afterRender() {
    const restaurant = await FavoriteResto.getAllrestos();
    const restoContainer = document.querySelector('#resto-list');
    restaurant.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default RestauranLike;
