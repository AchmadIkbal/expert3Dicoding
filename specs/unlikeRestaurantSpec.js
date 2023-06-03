import FavoriteButton from "../src/scripts/utils/like-button-init";
import FavoriteResto from "../src/scripts/data/favourite";
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Restaurant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    beforeEach(async() => {
        addLikeButtonContainer();
        await FavoriteResto.putresto({ id: 1 });
    });

    afterEach(async() => {
        await FavoriteResto.deleteresto(1);
    });

    it('should display unlike widget when the resto has been liked', async() => {
        await TestFactories.createLikeButtonPresenterWithresto({ id: 1 });
        await FavoriteButton.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: 1,
            },
        });

        expect(document.querySelector('[aria-label="unlike this Restaurant"]'))
            .toBeTruthy();
    });

    it('should not display like widget when the restaurant has been liked', async() => {
        await TestFactories.createLikeButtonPresenterWithresto({ id: 1 });
        await FavoriteButton.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: 1,
            },
        });

        expect(document.querySelector('[aria-label="like this Restaurant"]'))
            .toBeFalsy();
    });
    it('should be able to remove liked restaurant from the list', async() => {
        await TestFactories.createLikeButtonPresenterWithresto({ id: 1 });
        await FavoriteButton.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: 1,
            },
        });
        document.querySelector('[aria-label="unlike this Restaurant"]').dispatchEvent(new Event('click'));
        expect(await FavoriteResto.getAllrestos()).toEqual([]);
    });
    it('should not throw error if the unliked Restaurant is not in the list', async() => {
        await TestFactories.createLikeButtonPresenterWithresto({ id: 1 });
        await FavoriteButton.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: 1,
            },
        });
        // hapus dulu film dari daftar film yang disukai
        await FavoriteResto.deleteresto(1);
        // kemudian, simulasikan pengguna menekan widget batal menyukai film
        document.querySelector('[aria-label="unlike this Restaurant"]').dispatchEvent(new Event('click'));
        expect(await FavoriteResto.getAllrestos()).toEqual([]);
    });
});