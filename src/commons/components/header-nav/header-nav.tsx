import React from 'react';
import { Link } from 'react-router-dom';

// @material
import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';

//styles
const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: "flex",
    justifyContent:"space-between"
  },
  catalogBtn: {
    background: "#64DD17",
    "&:hover": {
      background: "#64DD17",
    }
  },
  
  myProfileBtn: {
        "&:hover": {
      background: "#64DD17",
    }
  },
  distanceForBtn: {
    marginRight: "10px"
  },
  loginLink: {
    color: '#64DD17',
        "&:hover": {
          background: "#64DD17",
          color: "#ffffff",
          borderRadius: "4px",
    }
  },
}))

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
