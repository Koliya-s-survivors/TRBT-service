import React from 'react';

//components
import FooterLogo from "../footer-logo";
import FooterInfo from '../footer-info';
import FooterDownloadApp from '../footer-download-app';

// @material
import { Box, Container, Grid } from '@material-ui/core';

//styles
import useStyles from './footer-styles';

const Footer: React.FC = () => {
  const footerClasses = useStyles();
  return (
    <Box component='footer' p={1} className={footerClasses.container}>
      <Grid component='article' container justifyContent={'center'} alignContent={'center'}>
        <Grid component='section' item xs={12} sm={9} >
          <FooterLogo />
          <FooterInfo />
        </Grid>        
        <Grid component='section' item xs={12} sm={3}  >
          <FooterDownloadApp />
        </Grid>
      </Grid>
    </Box>
  );
}


export default Footer;