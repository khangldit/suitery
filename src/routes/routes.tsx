import Home from '@pages/Home';
// import HeaderOnlyLayout from '@components/Layout/HeaderOnlyLayout';
import * as ROUTES from './constants';
import Loadable from 'react-loadable';

const loadable = (loader) =>
  Loadable({
    loader,
    delay: false,
    loading: () => null,
  });

const publicRoutes = [
  { path: '/', component: Home },
  {
    path: ROUTES.PLAY_NOW,
    component: loadable(() => import('@pages/PlayNow')),
  },
  { path: ROUTES.DRAW, component: loadable(() => import('@pages/Draw')) },
  { path: ROUTES.MY_ITEM, component: loadable(() => import('@pages/MyItem')) },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
