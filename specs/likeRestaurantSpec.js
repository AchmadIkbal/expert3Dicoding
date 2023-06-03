import FavoriteButton from "../src/scripts/utils/like-button-init";
import FavoriteResto from "../src/scripts/data/favourite";
import Detail from "../src/scripts/views/pages/detail";
import * as TestFactories from './helpers/testFactories';
describe('Liking A Movie', () => {

    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    beforeEach(() => {
        addLikeButtonContainer();
    });

    it('should show the like button when the restaurant has not been liked before', async() => {
        await TestFactories.createLikeButtonPresenterWithresto({ id: 1 });

        await FavoriteButton.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: 1,
            },
        });

        expect(document.querySelector('[aria-label="like this Restaurant"]'))
            .toBeTruthy();
    });
    it('should not show the unlike button when the restaurant has not been liked before', async() => {
        await TestFactories.createLikeButtonPresenterWithresto({ id: 1 });
        await FavoriteButton.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: 1,
            },
        });
        expect(document.querySelector('[aria-label="unlike this Restaurant"]'))
            .toBeFalsy();
    });
    it('should be able to like the restaurant', async() => {
        await TestFactories.createLikeButtonPresenterWithresto({ id: 1 });

        await FavoriteButton.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: 1,
            },
        });
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        const restaurant = await FavoriteResto.getresto(1);
        expect(restaurant).toEqual({ id: 1 });

        FavoriteResto.deleteresto(1);
    });

    it('should not add a restaurant again when its already liked', async() => {
        await TestFactories.createLikeButtonPresenterWithresto({ id: 1 });
        await FavoriteButton.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: 1,
            },
        });
        // Tambahkan film dengan ID 1 ke daftar film yang disukai
        await FavoriteResto.putresto({ id: 1 });
        // Simulasikan pengguna menekan tombol suka film
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        // tidak ada film yang ganda
        expect(await FavoriteResto.getAllrestos()).toEqual([{ id: 1 }]);
        FavoriteResto.deleteresto(1);
    });

    // menggunakan metode xit, bukan it
    it('should not add a restaurant when it has no id', async() => {
        await TestFactories.createLikeButtonPresenterWithresto({});
        await FavoriteButton.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {},
        });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        expect(await FavoriteResto.getAllrestos()).toEqual([]);
    });
});