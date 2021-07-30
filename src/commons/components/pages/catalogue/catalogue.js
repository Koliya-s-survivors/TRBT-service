import React, { Component } from "react";
// components
import CatalogContent from "../../catalog-content";
import CatalogGenres from '../../catalog-genres';
import CatalogCategories from '../../catalog-categories';
 
export default class Catalogue extends Component {
  state = {
    objMelodies: [
      {
        id: 0,
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
    ],
    
     genres: [
      {
        id: 1,
        genre: 'Из фильмов',
      },
      {
        id: 2,
        genre: 'Поп',
      },
      {
        id: 3,
        genre: 'Undefined',
      },
      {
        id: 4,
        genre: 'Рок',
      },
      {
        id: 5,
        genre: 'Другое',
      },
      {
        id: 6,
        genre: 'Dance',
      },
      {
        id: 7,
        genre: 'Хип-хоп',
      },
      {
        id: 8,
        genre: 'Приколы',
      },
      {
        id: 9,
        genre: 'Golden hits',
      },
      {
        id: 10,
        genre: 'Для детей',
      },
   ],
    
    isActiveGenre: 'Из фильмов',
  }

genreClick = (genre) => {
    this.setState({isActiveGenre: genre});
  }
 
render() {    
    return (
      <>
        <section> This is Catalogue section</section>
        <CatalogGenres genres={this.state.genres} isActiveGenre={this.state.isActiveGenre} genreClick={this.genreClick}/>
        <CatalogCategories category={this.state.isActiveGenre}/>
        <CatalogContent objMelodies={this.state.objMelodies} />
       </>
    )
  }
}
          