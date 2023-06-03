import { itActsAsFavoriteRestaurantModel } from "./contract/favoriteRestaurantContract";

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
    getresto(id) {
        if (!id) {
            return;
        }

        return favoriteRestaurants.find((restaurant) => restaurant.id === id);
    },

    getAllrestos() {
        return favoriteRestaurants;
    },

    putresto(restaurant) {
        if (!restaurant.hasOwnProperty('id')) {
            return;
        }

        // pastikan id ini belum ada dalam daftar favoriteRestaurant
        if (this.getresto(restaurant.id)) {
            return;
        }

        favoriteRestaurants.push(restaurant);
    },

    deleteresto(id) {
        // cara boros menghapus restaurant dengan meng-copy restaurant yang ada
        // kecuali restaurant dengan id === id
        favoriteRestaurants = favoriteRestaurants.filter((restaurant) => restaurant.id !== id);
    },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
    // eslint-disable-next-line no-return-assign
    afterEach(() => (favoriteRestaurants = []));

    itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});