import React from 'react';
import { Link } from 'react-router-dom';
// @material
import { Box, Grid, Card, CardContent, CardMedia, IconButton, Typography, Button } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Checkbox from '@material-ui/core/Checkbox';

// styles
import useStyles from './my-profile-content-item-styles';


interface MyProfileContentItemProps {
  key: number,
  melody: Melody
}

interface Melody {
  musicName: string,
  artist: string,
  img: string,
  dataPurchase: string,
  paidPeriod: string,
}

const MyProfileContentItem: React.FC<MyProfileContentItemProps> = (props) => {
  const myProfileContentItemClasses: any = useStyles();
  const {
    img,
    musicName,
    artist,
    dataPurchase,
    paidPeriod, } = props.melody // test props

  return (
    <Box p={1.25}>
      <Grid container item xs={12} sm={12} md={8} lg={6}
        className={myProfileContentItemClasses.firstGridContainer}>
        <Card className={myProfileContentItemClasses.card} >
          <CardMedia
            image={img}
            title='Image title'
            className={myProfileContentItemClasses.cardMedia}
          />

          <CardContent>

            <Grid container >
              <Grid item xs={12}>
                <Typography >
                  {musicName}
                </Typography>
              </Grid>

              <Grid container item xs={12}>
                <Grid item xs={10}>
                  <Typography className={myProfileContentItemClasses.artist} >
                    {artist}
                  </Typography>
                </Grid>

                <Grid item xs>
                  <IconButton aria-label="info" className={myProfileContentItemClasses.iconBtn} >
                    <Link to='/' >
                      <InfoOutlinedIcon className={myProfileContentItemClasses.icon} />
                    </Link>
                  </IconButton>
                </Grid>

              </Grid>
            </Grid>

          </CardContent>

        </Card>

        <Grid container item xs={8} sm={6} md={6} className={myProfileContentItemClasses.secondGridContainer}>

          <Grid item xs={12} className={myProfileContentItemClasses.description}>
            <Typography>
              Date of purchase: {dataPurchase}
            </Typography>
            <Typography>
              Paid period of validity: {paidPeriod}
            </Typography>
          </Grid>

          <Grid item xs={12} >
            <Checkbox color='default' inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className={myProfileContentItemClasses.checkbox} />default play
          </Grid>

          <Grid item xs={12} style={{ margin: '5px 0' }}>
            <Checkbox color='default' inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className={myProfileContentItemClasses.checkbox} />default play
          </Grid>

          <Grid item xs={12} >
            <Button variant="contained" className={myProfileContentItemClasses.button}>Default</Button>
          </Grid>

        </Grid>

      </Grid>
    </Box>
  )
};

export default MyProfileContentItem;
