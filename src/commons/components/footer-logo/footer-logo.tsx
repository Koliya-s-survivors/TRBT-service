import React from 'react';

// components
import FooterIcon from '../footer-icon';
 
// @material
import { Grid } from '@material-ui/core';

const FooterLogo: React.FC = () => {
  return (
    <Grid item xs={12}>
      <FooterIcon />
    </Grid>
  );
}

export default FooterLogo;
