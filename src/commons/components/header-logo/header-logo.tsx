import React from 'react';

// @material
import { Typography, makeStyles, Grid} from '@material-ui/core';
import { Link } from 'react-router-dom';

// styles
const useStyles = makeStyles((theme) => ({ 
  headerLogo: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#64DD17',
    '@media (min-width:600px)': {
      fontSize: '4.5rem',
    },    
  }
}));

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