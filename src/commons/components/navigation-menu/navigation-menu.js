import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavigationMenu extends Component {

  render() {
    return <nav>
      <Link to="/">
        <p>Catalogue</p>
      </Link>

      <Link to="/my-profile">
        <p>My Profile</p>
      </Link>

      <Link to="/login">
        <p>Log In</p>
      </Link>
    </nav>
  }
}