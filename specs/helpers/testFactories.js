import FavoriteButton from "../../src/scripts/utils/like-button-init";

const createLikeButtonPresenterWithresto = async(restaurant) => {
    await FavoriteButton.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant,
    });
};

export { createLikeButtonPresenterWithresto };