import React from 'react';

// components
import CatalogContentItem from '../catalog-content-item';

// @material
import { Container, Grid, Box } from '@material-ui/core';

// interface
import { Melody } from '../../api/service/types';

interface CatalogContentProps {
  arrMelodies: Melody[]
}

const CatalogContent: React.FC<CatalogContentProps> = ({arrMelodies}) => {
  return (
    <Box py={4}>
      <Container fixed maxWidth="md">
      <Grid container spacing={4}>
        {arrMelodies.map(item =>
          <CatalogContentItem key={item.id} melody={item} />
        )}
      </Grid>
    </Container>
    </Box>
  )
}

export default CatalogContent;
