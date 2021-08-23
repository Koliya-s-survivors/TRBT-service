import React from 'react';

// components
import CatalogCategoriesItem from '../catalog-categories-item';

// @material
import {Box, Grid, Typography, Divider} from '@material-ui/core';

// style
import useStyles from './catalog-genres-styles';

// interface
import { Genre } from '../../api/service/types'

export interface CatalogGenresProps {
    genres: Genre[], //item description required
    isActiveGenre: string,
    genreClick: (genre: string) => void
}

const CatalogGenres: React.FunctionComponent<CatalogGenresProps> = ({genres, isActiveGenre, genreClick}) => {
    const classes = useStyles();
    return(
        <>
        <Grid item xs={12} className={classes.gridContainer}>
            <Box className={classes.title}>
                <Typography variant={"h6"}>Genres</Typography>
            </Box>
            <Grid container direction={'row'} justifyContent={'flex-start'} alignContent={'center'} >
                {genres.map(item => {
                    return <CatalogCategoriesItem key={item.id} category={item.genre} categoryClick={genreClick}
                                                  isActiveCategory={isActiveGenre}/>
                })}
            </Grid>
        </Grid>
        <Divider/>
        </>
    );
}

export default CatalogGenres;
