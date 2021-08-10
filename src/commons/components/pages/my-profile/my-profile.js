import React, {Component} from "react";

// components
// import MyProfileContent from "../../my-profile-content";
// import MyProfileContentItem from "../../my-profile-content-item";
 

export default class MyProfile extends Component { 
  state = {
    itemArray: [
      {
        id: 0,
        img: 'some text',
        musicName: 'Hoolio Iglessias',
        artist: 'Hoolio Iglessias',
        dataPurchase = '2017-06-22 10:33:14',
        paidPeriod = '2017-07-02 00:00:00'
      },
      {
        id: 1,
        img: 'some text2',
        musicName: 'Hoolio Iglessias2',
        artist: 'Hoolio Iglessias2',
        dataPurchase = '2017-06-22 10:33:14',
        paidPeriod = '2017-07-02 00:00:00'
      },
    ]
  }

  render () {
    return (
      <>
        <section> This is My profile section</section>
        {/* <MyProfileContent />
        <MyProfileContentItem/> */}
      </>
    )  
  }
}