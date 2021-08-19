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
    <Grid  item xs={12} className={headerNav.gridContainer}>
      <Box >
        <Link className={headerNav.distanceForBtn}  to="/">
          <Button  className={headerNav.catalogBtn} >
            Catalogue
          </Button>
        </Link>
        {isAuth ?
          <Link  to="/my-profile">
            <Button className={headerNav.myProfileBtn}>
              My Profile
            </Button>
          </Link>
          :
          null
        }
      </Box>
      <Link  to="/login">
        <Typography className={headerNav.loginLink}>
          Login
        </Typography>
      </Link>
    </Grid>
  )
}

export default HeaderNav;
