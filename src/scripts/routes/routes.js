import Detail from '../views/pages/detail';
import HomeMenu from '../views/pages/home-menu';
import RestauranLike from '../views/pages/home-like';

const routes = {
  '/': HomeMenu, // defauft page
  '/home-menu': HomeMenu,
  '/detail/:id': Detail,
  '/like': RestauranLike,
};
export default routes;
