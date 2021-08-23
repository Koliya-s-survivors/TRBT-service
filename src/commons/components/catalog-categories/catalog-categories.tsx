import React from 'react';

// components
import CatalogCategoriesItem from '../catalog-categories-item';

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

    const classes = useStyles();
    return (
        <>
        <Grid item xs={12} className={classes.gridContainer}>
            <Box className={classes.title}>
                <Typography variant={"h6"}>Categories</Typography>
                <Typography variant={"h6"} className={classes.text}>"{activeGenre}"</Typography>
            </Box>
                <Grid container direction={'row'} justifyContent={'flex-start'} alignContent={'center'} >
                    {categories.map(item => {
                        return <CatalogCategoriesItem key={item.id} category={item.title} categoryClick={categoryClick}
                                                      isActiveCategory={isActiveCategory}/>
                    })}
                </Grid>
        </Grid>
        <Divider/>
        </>
    );
}

export default CatalogCategories;
