import React from 'react';

// @material
import { Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

// styles
import useStyles from './header-logo-styles';

interface Props { }

const HeaderLogo: React.FC<Props> = () => {
  const headerLogoClasses = useStyles();
  return (
    <Box component='article' p={1}>
      <Typography variant='h1' >
        <Link className={headerLogoClasses.headerLogo} to="/">T-RBT Service</Link>
      </Typography>
    </Box>
  )
}

export default HeaderLogo;