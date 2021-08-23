import React from 'react';
import { Link } from 'react-router-dom';

// @material
import { Box, Button, Grid,Typography } from '@material-ui/core';

//styles
import useStyles from './header-nav-styles';

const HeaderNav: React.FC = () => {
  const isAuth = true;
  const headerNav = useStyles();
  return (
    <Box p={1.25}>
      <Grid container item xs={12} className={headerNav.gridContainer}>
        <Grid item xs={11} >
          <Link className={headerNav.distanceForBtn} to="/">
            <Button className={headerNav.catalogBtn} >
              Catalogue
            </Button>
          </Link>
          {isAuth ?
            <Link to="/my-profile">
              <Button className={headerNav.myProfileBtn}>
                My Profile
              </Button>
            </Link>
            :
            null
          }
         </Grid>
          <Grid item xs >
          <Link to="/login">
            <Typography className={headerNav.loginLink}>
              Login
            </Typography>
          </Link>
          </Grid>
      </Grid>
    </Box>
  )
}

export default HeaderNav;
