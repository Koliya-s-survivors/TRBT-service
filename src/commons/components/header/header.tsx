import React from 'react';

// components
import HeaderLogo from '../header-logo';
import HeaderNav from '../header-nav';

//@material
import {AppBar, Container, Toolbar, Grid} from "@material-ui/core";

// styles
import './header.css';

const Header:React.FC = () => {
  return (
      <AppBar position="static">
          <Container fixed >
              <Toolbar>
                 <Grid container xs={12} sm={6} md={4}>
                     <Grid item >
                         <HeaderLogo/>
                     </Grid>
                     <Grid item >
                         <HeaderNav/>
                     </Grid>
                 </Grid>
              </Toolbar>
          </Container>
      </AppBar>
    // <header className="header">
    //   <HeaderLogo/>
    //   <HeaderNav/>
    // </header>
  )
};

export default Header;