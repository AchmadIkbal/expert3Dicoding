import { itActsAsFavoriteRestaurantModel } from "./contract/favoriteRestaurantContract";
import FavoriteResto from "../src/scripts/data/favourite";

describe('Favorite resto Idb Contract Test Implementation', () => {
    afterEach(async() => {
        (await FavoriteResto.getAllrestos()).forEach(async(resto) => {
            await FavoriteResto.deleteresto(resto.id);
        });
    });

    itActsAsFavoriteRestaurantModel(FavoriteResto);
});