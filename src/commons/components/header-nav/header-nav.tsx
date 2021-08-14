import React from 'react';
import { Link } from 'react-router-dom';

// styles
import './header-nav.css';

const HeaderNav:React.FC = () => {   
  return <nav className="header-nav">
    <Link className="header-nav-catalogue" to="/">
      <p>Catalogue</p>
      </Link>

    <Link className="header-nav-my-profile" to="/my-profile">
      <p>My Profile</p>
      </Link>

    <Link className="header-nav-login" to="/login">
      <p>Login</p>
      </Link>
    </nav>  
}

export default HeaderNav;