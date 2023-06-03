const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
    it('should return the restaurant that has been added', async() => {
        favoriteRestaurant.putresto({ id: 1 });
        favoriteRestaurant.putresto({ id: 2 });

        expect(await favoriteRestaurant.getresto(1)).toEqual({ id: 1 });
        expect(await favoriteRestaurant.getresto(2)).toEqual({ id: 2 });
        expect(await favoriteRestaurant.getresto(3)).toEqual(undefined);
    });

    it('should refuse a Restaurant from being added if it does not have the correct property', async() => {
        favoriteRestaurant.putresto({ aProperty: 'property' });

        expect(await favoriteRestaurant.getAllrestos()).toEqual([]);
    });

    it('can return all of the Restaurants that have been added', async() => {
        favoriteRestaurant.putresto({ id: 1 });
        favoriteRestaurant.putresto({ id: 2 });

        expect(await favoriteRestaurant.getAllrestos()).toEqual([{ id: 1 }, { id: 2 }]);
    });

    it('should remove favorite Restaurant', async() => {
        favoriteRestaurant.putresto({ id: 1 });
        favoriteRestaurant.putresto({ id: 2 });
        favoriteRestaurant.putresto({ id: 3 });

        await favoriteRestaurant.deleteresto(1);

        expect(await favoriteRestaurant.getAllrestos()).toEqual([{ id: 2 }, { id: 3 }]);
    });

    it('should handle request to remove a Restaurant even though the Restaurant has not been added', async() => {
        favoriteRestaurant.putresto({ id: 1 });
        favoriteRestaurant.putresto({ id: 2 });
        favoriteRestaurant.putresto({ id: 3 });

        await favoriteRestaurant.deleteresto(4);

        expect(await favoriteRestaurant.getAllrestos()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
    });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteRestaurantModel };