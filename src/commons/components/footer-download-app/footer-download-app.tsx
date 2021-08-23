import React from 'react';

// @material
import { Box, Grid, Typography } from '@material-ui/core';
import AndroidOutlinedIcon from '@material-ui/icons/AndroidOutlined';
import AppleIcon from '@material-ui/icons/Apple';

//styles
import useStyles from './footer-download-app-styles';

interface Props { }

const FooterDownloadApp: React.FC<Props> = () => {
  const footerDownloadAppClasses = useStyles();
  return (
    <Box p={1}>
      <Grid container item xs={12} spacing={2} direction={'row'} alignContent={'center'} justifyContent={'center'} >
        <Grid item xs={12} className={footerDownloadAppClasses.title}>
          <Typography component="h3" variant="h5">
            Download app
          </Typography>
        </Grid>
        <Grid container item xs={12} alignContent={'center'} justifyContent={'center'}  >
          <Grid item  >
            <AndroidOutlinedIcon fontSize="large" className={footerDownloadAppClasses.androidIcon} />
          </Grid>
          <Grid item  >
            <AppleIcon fontSize="large" className={footerDownloadAppClasses.appleIcon} />
          </Grid>
        </Grid>
      </Grid >
    </Box>
  );
}

export default FooterDownloadApp;