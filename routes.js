import Home from './containers/HomeContainer';
import Movie from './containers/MovieContainer';

import Login from './containers/LoginContainer';
import Register from './containers/RegisterContainer';
import Index from './containers/IndexContainer';

const routes = [
    { path: '/', exact: true, name: 'Index',component: Index },
    { path: '/home', exact: true, name: 'Home',component: Home },
    { path: '/login', exact: true, name: 'Login',component: Login },
    { path: '/register', exact: true, name: 'Register',component: Register },
    { path: '/:movieId', exact: true, name: 'Movie',component: Movie }
];

export default routes;
