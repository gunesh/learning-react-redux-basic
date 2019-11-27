

import Register from './components/Auth/Register/Register';

import AboutContainer from './container/AboutContainer';
import ContactContainer from './container/ContactContainer';
import UserContainer from './container/UserContainer';
import LoginContainer from './container/LoginContainer';
const routes = [
    { path: '/', exact: true, name: 'UserContainer',component: UserContainer },
    { path: '/home', exact: true, name: 'UserContainer',component: UserContainer },
    { path: '/about', exact: true, name: 'AboutContainer',component: AboutContainer },
    { path: '/contact', exact: true, name: 'ContactContainer',component: ContactContainer },
    { path: '/login', exact: true, name: 'LoginContainer',component: LoginContainer },
    { path: '/register', exact: true, name: 'Register',component: Register }
    
];

export default routes;
