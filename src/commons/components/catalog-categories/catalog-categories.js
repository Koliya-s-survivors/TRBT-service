import React from 'react';

// style
import './catalog-categories.css';
import './catalog-categories-media.css';

const CatalogCategories = (props) => {
    return(
        <article className='catalog-categories'>
            <p>Categories</p>
            <p>"{props.category}"</p>
        </article>
    );
}

export default CatalogCategories;
