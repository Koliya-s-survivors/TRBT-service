import React from 'react';

// components
import CatalogCategoriesItem from '../catalog-button-item';

// @material
import {Grid, Typography, Box, Divider} from '@material-ui/core';

// style
import useStyles from './catalog-categories-styles';

// interface
import { Category } from '../../api/service/types';

interface CatalogCategoriesProps {
    categories: Category[]
    categoryClick: (category: string) => void,
    isActiveCategory: string
    activeGenre: string
}

const CatalogCategories: React.FunctionComponent<CatalogCategoriesProps> = ({
    categories,
    categoryClick,
    isActiveCategory,
    activeGenre
}) => {


    const { containerPositioning } = useStyles();
    return (
        <Box component='section' p={1}>
            <Grid container direction={'row'} justifyContent={'center'} alignContent={'center'}>
                <Grid container 
                    direction={'row'}
                    justifyContent={'center'}
                    alignContent={'center'}
                    item xs={12} sm={3} 
                    className={containerPositioning}>
                    <Typography variant={"subtitle1"}>{`Categories: ${activeGenre}`}</Typography>
                </Grid>
                <Grid container 
                    direction={'column'}
                    justifyContent={'center'}
                    alignContent={'center'}
                    item xs={12} sm={9} 
                    className={containerPositioning}>

                    {categories.map(item => {
                        return <CatalogCategoriesItem key={item.id} category={item.title} categoryClick={categoryClick}
                            isActiveCategory={isActiveCategory} />
                    })}
                </Grid>
            </Grid>
            <Divider/>
        </Box>
    );
}

export default CatalogCategories;
