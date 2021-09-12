import React from 'react';

// components
import HeaderLogo from '../header-logo';
import HeaderNav from '../header-nav';

//@material
import { AppBar, Toolbar, Grid } from "@material-ui/core";

// styles
import useStyles from './header-styles';

const Header: React.FC = () => {
    const headerClasses = useStyles();

    return (
        <AppBar position="sticky" className={headerClasses.header}>
            <Toolbar component='article'>
                <Grid component='section' container direction='column'>
                    <HeaderLogo />
                    <HeaderNav  isAuth={true}/>
                </Grid>
            </Toolbar>
        </AppBar>
    )
};

export default Header;