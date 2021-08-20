import React from 'react';

//components
import FooterLogo from "../footer-logo";
import FooterInfo from '../footer-info';
import FooterDownloadApp from '../footer-download-app';

// @material
import { Container, Grid } from '@material-ui/core';

//styles
import useStyles from './footer-styles';

const Footer: React.FC = () => {
  const foterClasses = useStyles();
  return (
    <Container  component="footer" fixed className={foterClasses.container}>
      <Grid container xs={12} >
          <FooterLogo/>
        <Grid item xs={12} sm={9} className={foterClasses.info}>
          <FooterInfo/>
        </Grid>
        <Grid item xs className={foterClasses.info}>
          <FooterDownloadApp/>
        </Grid>
      </Grid>
    </Container>
  );
}


export default Footer;