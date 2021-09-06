import React from 'react';

// components
import CatalogCategoriesItem from '../catalog-button-item';

// @material
import { Box, Grid, Typography, Divider } from '@material-ui/core';

// style
import useStyles from './catalog-genres-styles';

// interface
import { Genre } from '../../api/service/types'

export interface CatalogGenresProps {
    genres: Genre[], //item description required
    isActiveGenre: string,
    genreClick: (genre: string) => void
}

const CatalogGenres: React.FunctionComponent<CatalogGenresProps> = ({ genres, isActiveGenre, genreClick }) => {
    const { containerPositioning } = useStyles();
    return (
        <Box component='section' p={1}>
            <Grid component='article' container direction={'row'} justifyContent={'center'} alignContent={'center'}>
                <Grid container
                    component='section'
                    direction={'row'}
                    justifyContent={'center'}
                    alignContent={'center'}
                    item xs={12} sm={3}
                    className={containerPositioning}>
                    <Typography variant={"subtitle1"}>Genres</Typography>
                </Grid>
                <Grid container
                    component='section'
                    direction={'column'}
                    justifyContent={'center'}
                    alignContent={'center'}
                    item xs={12} sm={9}
                    className={containerPositioning}>
                    {genres.map(item => {
                        return <CatalogCategoriesItem key={item.id} category={item.genre} categoryClick={genreClick}
                            isActiveCategory={isActiveGenre} />
                    })}
                </Grid>
            </Grid>
            <Divider />
        </Box>
    );
}

export default CatalogGenres;
