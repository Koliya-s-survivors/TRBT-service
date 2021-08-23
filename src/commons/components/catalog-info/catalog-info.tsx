import React from 'react';

// @material
import { Grid, Typography, Box } from '@material-ui/core';

// Styles
import useStyles from './catalog-info-styles';

// interface
interface CatalogInfoProps {
    activeGenre: string
    activeCategory: string
}

const CatalogInfo: React.FunctionComponent<CatalogInfoProps> = ({activeGenre, activeCategory}) => {
    const classes = useStyles();
    return (
      <Grid item xs={12} className={classes.container}>
          <Box>
              <Typography variant={'subtitle1'}>Content from <Typography variant={'body1'} component={'span'} className={classes.span}>"{activeGenre}/</Typography><Typography variant={'body1'} component={'span'} className={classes.span}>{activeCategory}"</Typography></Typography>
          </Box>
      </Grid>
    )

}

export default CatalogInfo;
