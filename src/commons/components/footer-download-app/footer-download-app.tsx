import React from 'react';

// @material
import { Grid, Typography } from '@material-ui/core';
import AndroidOutlinedIcon from '@material-ui/icons/AndroidOutlined';
import AppleIcon from '@material-ui/icons/Apple';

//styles
import useStyles from './footer-download-app-styles';

interface Props { }

const FooterDownloadApp: React.FC<Props> = () => {
  const footerDownloadAppClasses = useStyles();
  return (
    <Grid item xs={12} alignItems="center">
      <Grid container xs={12} >
        <Grid item xs={12} className={footerDownloadAppClasses.title}>
          <Typography component="h3" variant="h5" >
            Download app
          </Typography>
        </Grid>
        <Grid item xs={12} className={footerDownloadAppClasses.title}>
          <AndroidOutlinedIcon fontSize="large" className={footerDownloadAppClasses.androidIcon} />
          <AppleIcon fontSize="large" className={footerDownloadAppClasses.appleIcon} />
        </Grid>
      </Grid>
    </Grid >
  );
}

export default FooterDownloadApp;