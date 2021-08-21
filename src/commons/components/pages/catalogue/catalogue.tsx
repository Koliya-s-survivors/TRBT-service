import React, { Component } from 'react';

// components
import CatalogGenres from '../../catalog-genres';
import CatalogCategories from '../../catalog-categories';
import CatalogInfo from '../../catalog-info';
import CatalogContent from '../../catalog-content';
import service from '../../../api/service';

// interface
import { Service } from '../../../api/service/types'
interface Props {
}

interface State extends Service {}

export default class Catalogue extends Component<Props, State> {
    state: State = service

    genreClick = (genre: string) => {
        this.setState({isActiveGenre: genre, isActiveCategory: ''});
    }

    categoryClick = (category: string) => {
        this.setState({isActiveCategory: category});
    }

    render() {
        // @ts-ignore
        const categories: Category[] = this.state.genres.find(item => item.genre === this.state.isActiveGenre).categories
        return (
            <>
                <section> This is Catalogue section</section>
                <CatalogGenres genres={this.state.genres} isActiveGenre={this.state.isActiveGenre}
                               genreClick={this.genreClick}/>
                <CatalogCategories categories={categories} activeGenre={this.state.isActiveGenre}
                                   isActiveCategory={this.state.isActiveCategory} categoryClick={this.categoryClick}/>
                <CatalogInfo activeGenre={this.state.isActiveGenre} activeCategory={this.state.isActiveCategory}/>
                <CatalogContent arrMelodies={this.state.arrMelodies}/>
            </>
        )
    }
}
