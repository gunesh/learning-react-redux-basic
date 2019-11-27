import React from 'react';
import {  Link } from 'react-router-dom';

class Header extends React.Component{
  
  render(){
    return <>
     <div>
          <h2>Demo App</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
            <li><Link to={'/login'} className="nav-link">Login</Link></li>
            <li><Link to={'/register'} className="nav-link">Register</Link></li>
          </ul>
          </nav>
        
        </div>
    </>
  }
}


export default Header;