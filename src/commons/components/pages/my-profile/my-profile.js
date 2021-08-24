import React, { Component } from 'react';

// components
import MyProfileInfoPanel from '../../my-profile-info-panel';
import MyProfileContent from '../../my-profile-content';

export default class MyProfile extends Component {
  render() {
    return (
      <>
        <MyProfileInfoPanel />
        <MyProfileContent/>
      </>
    )
  }
}