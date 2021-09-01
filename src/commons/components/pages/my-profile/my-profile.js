import React, { Component } from 'react';

// components
import MyProfileInfoPanel from '../../my-profile-info-panel';
import MyProfileContentItem from '../../my-profile-content-item';

export default class MyProfile extends Component {
  render() {
    return (
      <>      
        <MyProfileInfoPanel />
        <MyProfileContentItem/>
      </>
    )
  }
}