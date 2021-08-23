import React from 'react';
import { Link } from 'react-router-dom';

// @material
import { Card, CardContent, CardMedia,Grid, Typography, } from '@material-ui/core';
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
    <Grid item  xs={12} sm={6} md={4}>
      <Card className={catalogContentItemClasses.card}>
        <CardMedia
          className={catalogContentItemClasses.cardMedia}
          image=' https://source.unsplash.com/random'
          title='Image title'
        />
        <CardContent style={{ padding: '0' }}>
          <Typography variant='h6' className={catalogContentItemClasses.title}>
            {musicName}
          </Typography>
          <Typography className={catalogContentItemClasses.artist}>
            {artist}
          </Typography>
        </CardContent>
        <Grid container className={catalogContentItemClasses.grid}>
          <Grid item xs={7} >
            <Typography variant='h6' className={catalogContentItemClasses.price}>
              {price}
            </Typography>
          </Grid>
          <Grid item xs={5} className={catalogContentItemClasses.blockIcon}>
            <Link to='/' className={catalogContentItemClasses.link}>
              <ShoppingCartOutlinedIcon />
            </Link>
            <Link to='/' className={catalogContentItemClasses.link}>
              <CardGiftcardOutlinedIcon />
            </Link>
            <Link to='/' className={catalogContentItemClasses.link}>
              <InfoOutlinedIcon />
            </Link>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  )
}

export default CatalogContentItem;
