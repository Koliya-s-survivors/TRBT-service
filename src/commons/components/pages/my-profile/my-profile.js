import React, { Component } from 'react';

// components
import MyProfileInfoPanel from '../../my-profile-info-panel';
// import MyProfileContent from '../../my-profile-content';
// import MyProfileHistory from '../../my-profile-history';
// import itemArray from '../../../api/my-profile/my-profile-content';

export default class MyProfile extends Component {
  render() {    
    return (
      <>
        <MyProfileInfoPanel />
        {/* <MyProfileContent itemArray={itemArray}/> */}
        {/* <MyProfileHistory itemArray={itemArray} isHistoryComponent={true}/> */}
      </>
    )
  }
}
