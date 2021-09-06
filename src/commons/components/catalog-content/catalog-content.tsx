import React from 'react';

// components
import CatalogContentItem from '../catalog-content-item';

// @material
import { Grid, Box } from '@material-ui/core';

// interface
import { Melody } from '../../api/service/types';

interface CatalogContentProps {
  arrMelodies: Melody[]
}

const CatalogContent: React.FC<CatalogContentProps> = ({ arrMelodies }) => {
  return (
    <Box component='section' p={1}>
      <Grid component='article' container direction='row' justifyContent='center' alignItems='flex-start'>
        {arrMelodies.map(item =>
          <CatalogContentItem key={item.id} melody={item} />
        )}
      </Grid>
    </Box>
  )
}

export default CatalogContent;
