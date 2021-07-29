import React, { Component } from "react";
// components
// import CatalogContent from "../../catalog-content";

export default class Catalogue extends Component {
  render() {
    const objMelodies = [
      { id:0,
        img: 'some text',
        musicName: 'Hoolio Iglessias',
        artist: 'Hoolio Iglessias',
        price: '$1',
      },
      {
        id: 1,
        img: 'some text2',
        musicName: 'Hoolio Iglessias2',
        artist: 'Hoolio Iglessias2',
        price: '$2',
      },
      {
        id: 2,
        img: 'some text3',
        musicName: 'Hoolio Iglessias3',
        artist: 'Hoolio Iglessias3',
        price: '$3',
      },
      {
        id: 3,
        img: 'some text4',
        musicName: 'Hoolio Iglessias4',
        artist: 'Hoolio Iglessias4',
        price: '$4',
      },
      {
        id: 4,
        img: 'some text',
        musicName: 'Hoolio Iglessias',
        artist: 'Hoolio Iglessias',
        price: '$1',
      },
      {
        id: 5,
        img: 'some text2',
        musicName: 'Hoolio Iglessias2',
        artist: 'Hoolio Iglessias2',
        price: '$2',
      },
      {
        id: 6,
        img: 'some text3',
        musicName: 'Hoolio Iglessias3',
        artist: 'Hoolio Iglessias3',
        price: '$3',
      },
      {
        id: 7,
        img: 'some text4',
        musicName: 'Hoolio Iglessias4',
        artist: 'Hoolio Iglessias4',
        price: '$4',
      },
      {
        id: 8,
        img: 'some text',
        musicName: 'Hoolio Iglessias',
        artist: 'Hoolio Iglessias',
        price: '$1',
      },
      {
        id: 9,
        img: 'some text2',
        musicName: 'Hoolio Iglessias2',
        artist: 'Hoolio Iglessias2',
        price: '$2',
      },
      {
        id: 10,
        img: 'some text3',
        musicName: 'Hoolio Iglessias3',
        artist: 'Hoolio Iglessias3',
        price: '$3',
      },
      {
        id: 11,
        img: 'some text4',
        musicName: 'Hoolio Iglessias4',
        artist: 'Hoolio Iglessias4',
        price: '$4',
      },
    ];
    return (
      <>
        <section> This is Catalogue section</section>
        {/* <CatalogContent objMelodies={objMelodies} /> */}
      </>
    )
  }
}