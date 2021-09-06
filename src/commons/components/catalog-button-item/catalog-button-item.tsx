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

const CatalogCategoriesItem: React.FunctionComponent<CatalogCategoriesItemProps> = ({
    isActiveCategory,
    category,
    categoryClick
}) => {
    const catalogCategoriesItemClasses = useStyles();

    const styleButton = (isActiveCategory === category) ? `${catalogCategoriesItemClasses.buttonAction} ${catalogCategoriesItemClasses.button}` : catalogCategoriesItemClasses.button;

    function onClick() {
        categoryClick(category)
    }

    return (
        <Box component='article' p={0.8}>
            <Button variant={"outlined"} className={styleButton} onClick={onClick}>
                {category}
            </Button>
        </Box>
    );
};

export default CatalogCategoriesItem;
