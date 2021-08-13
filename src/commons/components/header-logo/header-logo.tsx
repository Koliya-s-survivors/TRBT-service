import React from 'react';

// styles
import './header-logo.css';

interface Props { }

const HeaderLogo: React.FC<Props> = () => {
  return (
    <a className="header-logo" href="#">T-RBT Service</a>
  )
}

export default HeaderLogo;