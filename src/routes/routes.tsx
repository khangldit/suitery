import Home from '@pages/Home';
import PlayNow from '@pages/PlayNow';
import Draw from '@pages/Draw';
import MyItem from '@pages/MyItem';
import HeaderOnlyLayout from '@components/Layout/HeaderOnlyLayout';
import * as ROUTES from './constants';

const publicRoutes = [
  { path: '/', component: Home },
  { path: ROUTES.PLAY_NOW, component: PlayNow },
  { path: ROUTES.DRAW, component: Draw },
  { path: ROUTES.MY_ITEM, component: MyItem },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
