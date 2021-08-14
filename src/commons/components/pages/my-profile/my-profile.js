import React, { Component } from 'react';

// components
import MyProfileInfoPanel from '../../my-profile-info-panel';
import MyProfileCharges from '../../my-profile-charges';

export default class MyProfile extends Component {
  render() {
    return (
      <>
        <MyProfileInfoPanel />
        <MyProfileCharges />
      </>
    )
  }
}