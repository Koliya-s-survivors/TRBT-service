import React from 'react';

// components
import HeaderLogo from '../header-logo';
import HeaderNav from '../header-nav';

//@material
import { AppBar, Container, Toolbar, Grid} from "@material-ui/core";

// styles
import useStyles from './header-styles';

const Header: React.FC = () => {
    const headerClasses = useStyles();
    return (
        <AppBar position="static" className={headerClasses.header}>
            <Container fixed maxWidth='lg'>
                <Toolbar >
                    <Grid container>
                            <Grid item xs={12}>
                            <HeaderLogo />
                            </Grid>
                            <Grid item xs={12}>
                            <HeaderNav />
                            </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>

    )
};

export default Header;