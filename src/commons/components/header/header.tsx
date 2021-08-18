import React from 'react';

// components
import HeaderLogo from '../header-logo';
import HeaderNav from '../header-nav';

// styles
import './header.css';

const Header:React.FC = () => {
  return (
    <header className="header">
      <HeaderLogo/>
      <HeaderNav/>
      </header>         
  )
};

export default Header;