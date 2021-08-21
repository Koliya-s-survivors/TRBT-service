import React from 'react';

// components
import CatalogContentItem from '../catalog-content-item';

// @material
import { Container, Grid, Box } from '@material-ui/core';

interface CatalogContentProps {
  arrMelodies: Array<CatalogContentItemPropsMelody>
}

interface CatalogContentItemPropsMelody {
  id: number,
  img: any,
  musicName: string,
  artist: string,
  price: string
}

const CatalogContent: React.FC<CatalogContentProps> = (props) => {
  return (
    <Box py={4}>
      <Container fixed maxWidth="md">
      <Grid container spacing={4}>
        {props.arrMelodies.map(item =>
          <CatalogContentItem key={item.id} melody={item} />
        )}
      </Grid>
    </Container>
    </Box>
  )
}

export default CatalogContent;
