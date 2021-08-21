import React from 'react';

// components
import CatalogCategoriesItem from '../catalog-categories-item';

// @material
import {Grid, Typography, Box} from '@material-ui/core'

// style
import useStyles from './catalog-categories-styles'

// interface
import {Category} from '../pages/catalogue/catalogue';

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

    const catalogCategoriesClasses = useStyles();
    return (
        <Grid item xs={12} className={catalogCategoriesClasses.gridContainer}>
            <Box className={catalogCategoriesClasses.title}>
                <Typography variant={"subtitle1"}>Categories</Typography>
                <Typography variant={"subtitle1"}>"{activeGenre}"</Typography>
            </Box>
                <Grid container direction={'row'} justifyContent={'flex-start'} alignContent={'center'} >
                    {categories.map(item => {
                        return <CatalogCategoriesItem key={item.id} category={item.title} categoryClick={categoryClick}
                                                      isActiveCategory={isActiveCategory}/>
                    })}
                </Grid>
        </Grid>
    );
}

export default CatalogCategories;
