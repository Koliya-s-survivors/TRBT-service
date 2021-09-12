import React from 'react';

//@material
import { Button, Box } from '@material-ui/core';

// style
import useStyles from './catalog-button-item-styles'

// interface
interface CatalogCategoriesItemProps {
    isActiveCategory: string
    category: string
    categoryClick: (category: string) => void
}

const CatalogCategoriesItem: React.FunctionComponent<CatalogCategoriesItemProps> = ({ isActiveCategory, category, categoryClick }) => {
    const catalogCategoriesItemClasses = useStyles();

    const styleButton = (isActiveCategory === category) ? `${catalogCategoriesItemClasses.buttonAction} ${catalogCategoriesItemClasses.button}` : catalogCategoriesItemClasses.button;

    return (
        <Box component='article' p={0.8}>
            <Button
                size='large'
                variant="contained"
                color="default"
                className={styleButton}
                onClick={() => categoryClick(category)}>
                {category}
            </Button>
        </Box>
    );
};

export default CatalogCategoriesItem;
