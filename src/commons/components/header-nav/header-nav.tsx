import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// @material
import { Box, Button, Grid } from '@material-ui/core';

//styles
import useStyles from './header-nav-styles';

// interface
interface HeaderNavProps {
  isAuth: boolean
}

const HeaderNav: React.FC<HeaderNavProps> = ({ isAuth }) => {
  const headerNav = useStyles();

  const [activePage, setActivePage] = useState('CATALOG');

  return (
    <Box component='article' p={1}>
      <Grid component='section' container alignItems='center' >
        <Grid className={headerNav.navBtnContainerPositioningGroupOne} component='article' container alignItems='center' justifyContent='center' item xs={12} sm={9} >

          <Link to="/">
            <Button
              size='large'
              variant="contained"
              color="default"
              className={`${headerNav.btnDefault} ${activePage === 'CATALOG' ? headerNav.activeBtn : null}`}
              onClick={(event) => {
                const input = event.target as HTMLElement;
                setActivePage(input.innerText);
              }}>
              Catalog
            </Button>
          </Link>

          {isAuth ? <Link to="/my-profile">
            <Button
              size='large'
              variant="contained"
              color="default"
              className={`${headerNav.btnDefault} ${activePage === 'MY PROFILE' ? headerNav.activeBtn : null}`}
              onClick={(event) => {
                const input = event.target as HTMLElement;
                setActivePage(input.innerText);
              }}
              >
              My Profile
            </Button>
          </Link> : null}

        </Grid>

        <Grid className={headerNav.navBtnContainerPositioningGroupTwo} component='article' container alignItems='center' justifyContent='center' item xs={12} sm={3}>

          <Link to="/login">
            <Button
              size='large'
              variant="contained"
              color="default"
              className={`${headerNav.btnDefault} ${activePage === 'LOGIN' ? headerNav.activeBtn : null}`}
              onClick={(event) => {
                const input = event.target as HTMLElement;
                setActivePage(input.innerText);
              }}
              >
              Login
            </Button>
          </Link>

        </Grid>
      </Grid>
    </Box>
  )
}

export default HeaderNav;
