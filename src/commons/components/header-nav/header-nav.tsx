import React from 'react';
import { Link } from 'react-router-dom';

// @material
import { Box, Button, Grid, Typography } from '@material-ui/core';

//styles
import useStyles from './header-nav-styles';

const HeaderNav: React.FC = () => {
  const isAuth = true;
  const headerNav = useStyles();
  return (
    <Box component='article' p={1}>
      <Grid component='section' container direction='row' alignItems='center' justifyContent='center'>
        <Grid component='article' container alignItems='center' item xs={10} >
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
        <Grid component='article' container alignItems='center' item xs={2} >
          <Link to="/login">
            <Button className={headerNav.loginLink}>
              Login
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HeaderNav;
