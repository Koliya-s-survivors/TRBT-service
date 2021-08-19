import React from 'react';

// @material
import { Typography, Grid} from '@material-ui/core';
import { Link } from 'react-router-dom';

// styles
import useStyles from './header-logo-styles';

interface Props { }

const HeaderLogo: React.FC<Props> = () => {
  const headerLogoClasses = useStyles();
  return (
    <Grid item xs={12}>
      <Typography variant="h1" >
       <Link className={headerLogoClasses.headerLogo} to="/">T-RBT Service</Link>
     </Typography>
    </Grid>
    
  )
}

export default HeaderLogo;