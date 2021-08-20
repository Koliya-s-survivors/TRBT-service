import React from 'react';

// components
import CatalogContentItem from '../catalog-content-item';

// @material
import { Container, Grid } from '@material-ui/core';

// styles
import useStyles from './catalog-content-styles';

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
  const CatalogContentClasses = useStyles()
  return (
    <Container className={CatalogContentClasses.cardGrid} maxWidth="lg">
      <Grid container spacing={4}>
        {props.arrMelodies.map(item =>
          <CatalogContentItem key={item.id} melody={item} />
        )}
      </Grid>
    </Container>
  )
}

export default CatalogContent;
