import Home from '../pages/Home';
import About from '../pages/About';
import HeaderOnlyLayout from '../Layout/HeaderOnlyLayout';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/no', component: About, layout: null },
  { path: '/only', component: About, layout: HeaderOnlyLayout },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
