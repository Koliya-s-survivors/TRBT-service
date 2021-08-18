import React from 'react';
import { Link } from 'react-router-dom';

// @material
import { Box, Grid } from '@material-ui/core';

const HeaderNav: React.FC = () => {
  return (
    <Grid  item xs={12} justifyContent="space-between">
      <Box >
        <Link className="header-nav-catalogue" to="/">
          <p>Catalogue</p>
        </Link>
        <Link className="header-nav-my-profile" to="/my-profile">
          <p>My Profile</p>
        </Link>
      </Box>
      <Link className="header-nav-login" to="/login">
        <p>Login</p>
      </Link>
    </Grid>
  )
}

export default HeaderNav;
