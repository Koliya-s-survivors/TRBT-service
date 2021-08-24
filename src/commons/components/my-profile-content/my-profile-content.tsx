import React from 'react';

// components 
import MyProfileContentItem from '../my-profile-content-item';

// @material
import { Typography, Box, Grid } from '@material-ui/core';

// style
 

// interface
 interface MyProfileContentProps {
  sectionName: string,
  itemArray: any[] // item description required
}


const MyProfileContent: React.FC<MyProfileContentProps> = ({ sectionName, itemArray }) => {
  return (
    <Box p={1.25}>
        <Grid container xs={12}>
          <Grid item xs={12}>
            <Typography variant="h4">
            {sectionName}
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            {itemArray.map(item =>
              <MyProfileContentItem key={item}
                melody={item.melody}
              />
            )}
          </Grid>
        </Grid>
      </Box>  
  )
}

export default MyProfileContent;