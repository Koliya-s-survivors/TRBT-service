import React, { Component } from "react";

// components 
import CatalogGenres from '../../catalog-genres';
import CatalogCategories from '../../catalog-categories';
import CatalogInfo from "../../catalog-info";
import CatalogContent from "../../catalog-content";

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
        categories: [
          {
              id: 1,
              fk_genres_id: 1,
              title: 'Прочее'
          },
          {
              id: 2,
              fk_genres_id: 1,
              title: 'Русские'
          },
          {
              id: 3,
              fk_genres_id: 1,
              title: 'Зарубежные'
          },
          {
              id: 4,
              fk_genres_id: 1,
              title: 'Советские'
          }
        ]
      },
      {
        id: 2,
        genre: 'Поп',
        categories: [
          {
              id: 5,
              fk_genres_id: 2,
              title: 'Зарубежные'
          },
          {
              id: 6,
              fk_genres_id: 2,
              title: 'Русские'
          }
        ]
      },
      {
        id: 3,
        genre: 'Рок',
        categories: [
          {
              id: 5,
              fk_genres_id: 2,
              title: 'Зарубежные'
          },
          {
              id: 6,
              fk_genres_id: 2,
              title: 'Русские'
          }
        ]
      },
      {
        id: 4,
        genre: 'Другое',
        categories: [
          {
              id: 10,
              fk_genres_id: 4,
              title: 'Русские'
          },
          {
              id: 11,
              fk_genres_id: 4,
              title: 'Зарубежные'
          }
        ]
      },
      {
        id: 5,
        genre: 'Dance',
        categories: [
          {
              id: 12,
              fk_genres_id: 5,
              title: 'Русские'
          },
          {
              id: 13,
              fk_genres_id: 5,
              title: 'Зарубежные'
          }
        ]
      },
      {
        id: 6,
        genre: 'Хип-хоп',
        categories: [
          {
              id: 14,
              fk_genres_id: 6,
              title: 'Русские'
          },
          {
              id: 15,
              fk_genres_id: 6,
              title: 'Зарубежные'
          }
        ]
      },
      {
        id: 7,
        genre: 'Приколы',
        categories: [
          {
              id: 16,
              fk_genres_id: 7,
              title: 'Прочее'
          }
        ]
      },
      {
        id: 8,
        genre: 'Golden hits',
        categories: [
          {
              id: 17,
              fk_genres_id: 8,
              title: 'Зарубежные'
          },
          {
              id: 18,
              fk_genres_id: 8,
              title: 'Русские'
          },
          {
              id: 19,
              fk_genres_id: 8,
              title: 'Советские'
          }
        ]
      },
      {
        id: 10,
        genre: 'Классика',
        categories: [
            {
                id: 21,
                fk_genres_id: 10,
                title: 'Зарубежные'
            },
            {
                id: 22,
                fk_genres_id: 10,
                title: 'Русские'
            },
            {
                id: 23,
                fk_genres_id: 10,
                title: 'Без мелодий'
            }
        ]
      }
   ],
    
    isActiveGenre: 'Из фильмов',
    isActiveCategory: 'Классика',
  }

genreClick = (genre) => {
    this.setState({isActiveGenre: genre});
  }
 
render() {    
    return (
      <>
        <section> This is Catalogue section</section>
        <CatalogGenres genres={this.state.genres} isActiveGenre={this.state.isActiveGenre} genreClick={this.genreClick}/>
        <CatalogCategories category={this.state.isActiveGenre} genres={this.state.genres}/>
        <CatalogInfo activeGenre={this.state.isActiveGenre} activeCategory={this.state.isActiveCategory}/>
        <CatalogContent objMelodies={this.state.objMelodies} />         
       </>
    )
  }
}
          