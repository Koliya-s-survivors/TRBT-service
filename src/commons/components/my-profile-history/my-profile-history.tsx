import React from 'react'; 

// components 
import MyProfileContentItem from '../my-profile-content-item';

// @material
import { Typography, Box, Grid } from '@material-ui/core';

// style


// interface
interface MyProfileHistoryProps {
  isHistoryComponent: boolean,
  itemArray: any[],// item description required
     
}


const MyProfileHistory: React.FC<MyProfileHistoryProps> = ({isHistoryComponent, itemArray }) => {

  return (
    <Box p={1.25}>
      <Grid container >
        <Grid item xs={12}>
          <Typography variant="h4">
            History
          </Typography>
        </Grid>
        <Grid item xs={12} >
          {itemArray.map(item =>
            <MyProfileContentItem key={item.key}
              melody={item.melody} isHistoryComponent={isHistoryComponent}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  )
}

export default MyProfileHistory;
