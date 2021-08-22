import React from 'react';

// components
import CatalogGenresItem from '../catalog-genres-item';

// style
import useStyles from './catalog-genres-styles';
import {Box, Container, Grid, Typography} from "@material-ui/core";

// interface
export interface CatalogGenresProps {
    genres: any[], //item description required
    isActiveGenre: string,
    genreClick: (genre: string) => void
}

const CatalogGenres: React.FunctionComponent<CatalogGenresProps> = ({genres, isActiveGenre, genreClick}) => {
    const catalogGenresClasses = useStyles();
    return(
        <Box py={2}>
            <Container fixed maxWidth="md">
                <Typography variant="h5">
                    Genres
                </Typography>
                <Grid container spacing={4}>
                    {genres.map(item => {
                        return <CatalogGenresItem key={item.id} isActiveGenre={isActiveGenre} genre={item.genre} genreClick={genreClick}/>
                    })}
                </Grid>
            </Container>
        </Box>
    );
}

export default CatalogGenres;
