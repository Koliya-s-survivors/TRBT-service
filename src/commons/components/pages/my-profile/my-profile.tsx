import React, { Component } from 'react';
import { Interface } from 'readline';

// components
import MyProfileInfoPanel from '../../my-profile-info-panel';
import MyProfileTabNavigation from '../../my-profile-tab-navigation';
// import MyProfileSettings from '../../my-profile-settings';
// import MyProfileContent from '../../my-profile-content';
// import MyProfileHistory from '../../my-profile-history';
// import itemArray from '../../../api/my-profile/my-profile-content';

// interface
export interface Tab {
  id: number
  title: string
}

interface Props {}

interface State {
  tabs: Tab[]
  isActiveTab: string
}

const tabs = [
  {id: 1, title: 'Content'}, 
  {id: 5, title: 'Charges'}, 
  {id: 6, title: 'History'}, 
  {id: 7, title: 'Settings'}
];

export default class MyProfile extends Component<Props, State> {
  state = {
    tabs: tabs,
    isActiveTab: ''
  };

  tabClick = (tab: string) => {
    this.setState({isActiveTab: tab});
  };

  render() {    
    return (
      <>
        <MyProfileInfoPanel loginedEmail={'defaultEmail@gmail.com'}/>
        <MyProfileTabNavigation tabs={this.state.tabs} isActiveTab={this.state.isActiveTab} tabClick={this.tabClick} />
        {/* <MyProfileSettings/> */}
        {/* <MyProfileContent itemArray={itemArray}/> */}
        {/* <MyProfileHistory itemArray={itemArray} isHistoryComponent={true}/> */}
      </>
    )
  }
}
