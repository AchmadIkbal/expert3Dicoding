import MenuSource from '../../data/menu-source';
import { createRestoDetailTemplate, createRestoReviewTemplate } from '../templates/template.creator';
import UrlParser from '../../routes/url-parser';
import '../../component/resto-detail';
import '../../component/resto-review';
import FavoriteButton from '../../utils/like-button-init';
import FavoriteResto from '../../data/favourite';

const Detail = {
  async render() {
    return `
        <resto-detail></resto-detail>
        <div id="likeButtonContainer"></div>
        `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await MenuSource.detail(url.id);
    const restoContainer = document.querySelector('#resto-detail');
    restoContainer.innerHTML = createRestoDetailTemplate(detail);

    restoContainer.innerHTML += `
      <resto-review></resto-review>
    `;

    const restoReview = document.querySelector('#resto-review');
    detail.customerReviews.forEach((review) => {
      restoReview.innerHTML += createRestoReviewTemplate(review);
    });

    FavoriteButton.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteResto,
      restaurant: {
        id: detail.id,
        name: detail.name,
        city: detail.city,
        description: detail.description,
        pictureId: detail.pictureId,
        rating: detail.rating,
      },
    });
  },
};
export default Detail;
