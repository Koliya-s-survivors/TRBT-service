import React, { Component } from 'react';

// components
import CatalogGenres from '../../catalog-genres';
import CatalogCategories from '../../catalog-categories';
import CatalogInfo from '../../catalog-info';
import CatalogContent from '../../catalog-content';
import CatalogSearchPanel from '../../catalog-search-panel';
import service from '../../../api/service';

// @material
import { Grid, Box } from '@material-ui/core';

// interface
import { Service } from '../../../api/service/types';
interface Props {}

interface State extends Service {}

export default class Catalogue extends Component<Props, State> {
  state: State = service;

  genreClick = (genre: string) => {
    this.setState({ isActiveGenre: genre, isActiveCategory: '' });
  };

  categoryClick = (category: string) => {
    this.setState({ isActiveCategory: category });
  };

  render() {
    // @ts-ignore
    const categories: Category[] = this.state.genres.find(
      (item) => item.genre === this.state.isActiveGenre
    ).categories;
    // @ts-ignore
    const activeCategory = this.state.isActiveCategory
      ? this.state.isActiveCategory
      : this.categoryClick(categories[0].title);

    return (
      <Box p={1.25}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignContent="center"
        >
          {/* <CatalogSearchPanel /> */}
          <CatalogGenres
            genres={this.state.genres}
            isActiveGenre={this.state.isActiveGenre}
            genreClick={this.genreClick}
          />
          <CatalogCategories
            categories={categories}
            activeGenre={this.state.isActiveGenre}
            // @ts-ignore
            isActiveCategory={activeCategory}
            categoryClick={this.categoryClick}
          />

          <CatalogInfo
            activeGenre={this.state.isActiveGenre}
            activeCategory={this.state.isActiveCategory}
          />
          <CatalogContent arrMelodies={this.state.arrMelodies} />
        </Grid>
      </Box>
    );
  }
}
