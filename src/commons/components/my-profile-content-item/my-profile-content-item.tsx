import React from 'react';
import { Link } from 'react-router-dom';
// @material
import { Box, Grid, Card, CardContent, CardMedia, CardActions, IconButton, Typography, Container, Button } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

// styles
import './my-profile-content-item.css'
import './my-profile-content-item-media.css'


interface MyProfileContentItemProps {
  key: number,
  melody: Melody
}

interface Melody {
  musicName: string,
  artist: string,
  img?: string,
  dataPurchase: string,
  paidPeriod: string,
}

const MyProfileContentItem: React.FC<MyProfileContentItemProps> = (props) => {
  // const {  
  //   musicName = 'Тема усатого нян',
  //   artist = 'А. Рыбников',
  //   dataPurchase = '2017-06-22 10:33:14',
  //   paidPeriod = '2017-07-02 00:00:00' } = props.melody // test props

  return (
    <Box p={1.25}>
      <Grid container >
        <Grid container item xs={7} style={{ maxWidth: '800px', border: '3px solid #64DD17', borderRadius: '4px', padding: '15px', display: 'flex', flexDirection: 'row' }}>
          <Grid item xs={12} md={3}>
            <Card style={{ boxShadow: 'none', borderRadius: 'none', minWidth: '170px', maxWidth: '185px', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '15px', backgroundColor: '#e3e3e3' }}>
              <CardMedia
                image=' https://source.unsplash.com/random'
                title='Image title'
                style={{ width: '160px', height: '160px', borderRadius: '10px', justifySelf: 'center' }}
              />

              <CardContent>
                <Grid container >
                  <Grid item xs={12}>
                    <Typography >
                      Тема усатого нян
                    </Typography>
                  </Grid>
                  <Grid container item xs={12}>
                    <Grid item xs={10}>
                      <Typography style={{ color: '#1774A4' }}>
                        А. Рыбников
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <IconButton aria-label="info" style={{ padding: '0' }}>
                        <Link to='/' >
                          <InfoOutlinedIcon style={{ color: 'black' }} />
                        </Link>
                      </IconButton>
                    </Grid>


                  </Grid>
                </Grid>
              </CardContent>
            </Card>

          </Grid>
          <Grid container item xs style={{ padding: '15px 10px' }}>
            <Grid item xs={12} style={{ marginBottom: '5px' }}>
              <Typography>
                Date of purchase: 2017-06-22 10:33:14
              </Typography>
              <Typography>
                Paid period of validity: 2017-07-02 00:00:00
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} style={{ color: '#64DD17', padding: '0' }} />default play
            </Grid>
            <Grid item xs={12} style={{ margin: '5px 0' }}>
              <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} style={{ color: '#64DD17', padding: '0' }} />default play
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" style={{ backgroundColor: '#fff', color: '#64DD17', border: '1px solid #64DD17', boxShadow: 'none' }}>Default</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box >
  )
};

export default MyProfileContentItem;
