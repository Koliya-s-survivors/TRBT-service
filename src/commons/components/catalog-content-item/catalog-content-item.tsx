import React from 'react';
import { Link } from 'react-router-dom';

// @material
import { Box, Grid, Card, CardContent, CardMedia, CardActions, IconButton, Typography } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

// styles
import useStyles from './catalog-content-item-styles';

interface CatalogContentItemProps {
  key: number,
  melody: CatalogContentItemPropsMelody
}

interface CatalogContentItemPropsMelody {
  img: any,
  musicName: string,
  artist: string,
  price: string
}

const CatalogContentItem: React.FC<CatalogContentItemProps> = (props) => {
  const { musicName, artist, price } = props.melody;
  const catalogContentItemClasses: any = useStyles();

  return (
    <Box p={1}>
      <Grid container>
        <Card className={catalogContentItemClasses.card}>
          <CardMedia
            className={catalogContentItemClasses.cardMedia}
            image=' https://source.unsplash.com/random'
            title='Image title'
          />

          <CardContent>
            <Typography variant='h5' className={catalogContentItemClasses.title}>
              {musicName}
            </Typography>
            <Typography className={catalogContentItemClasses.artist}>
              {artist}
            </Typography>
          </CardContent>

          <CardActions>

            <Grid container justifyContent={'flex-start'} item xs={3}>
              <IconButton aria-label="price">
                <Typography variant='h5' className={catalogContentItemClasses.price}>
                  {price}
                </Typography>
              </IconButton>
            </Grid>

            <Grid container justifyContent={'flex-end'} item xs={9}>
              <IconButton aria-label="shopping-cart">
                <Link to='/' className={catalogContentItemClasses.link}>
                  <ShoppingCartOutlinedIcon />
                </Link>
              </IconButton>

              <IconButton aria-label="gift">
                <Link to='/' className={catalogContentItemClasses.link}>
                  <CardGiftcardOutlinedIcon />
                </Link>
              </IconButton>

              <IconButton aria-label="info">
                <Link to='/' className={catalogContentItemClasses.link}>
                  <InfoOutlinedIcon />
                </Link>
              </IconButton>
            </Grid>

          </CardActions>
        </Card>
      </Grid>
    </Box>
  )
}

export default CatalogContentItem;
