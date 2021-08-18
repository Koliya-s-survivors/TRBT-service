import React from 'react';

// components
import HeaderLogo from '../header-logo';
import HeaderNav from '../header-nav';

//@material
import { AppBar, Container, Toolbar, Grid, makeStyles } from "@material-ui/core";

// styles
const useStyles = makeStyles((theme) => ({    
        header: {
        background:theme.palette.background.paper,
        boxShadow:'none',
        }
    }
));

const Header: React.FC = () => {
    const headerClasses = useStyles();
    return (
        <AppBar position="static" className={headerClasses.header}>
            <Container fixed >
                <Toolbar >
                    <Grid container >
                            <HeaderLogo/>
                            <HeaderNav />
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>

    )
};

export default Header;