import React from 'react';

// style
import './catalog-categories.css';
import './catalog-categories-media.css';

// components
import CatalogCategoriesItem from '../catalog-categories-item';

const CatalogCategories = (props) => {
    return(
        <article className='catalog-categories'>
            <section>
                <p>Categories</p>
                <p>"{props.category}"</p>
            </section>
            <ul>
                {props.genres.find(item => {return item.genre === props.category}).categories.map(item => {
                    return <CatalogCategoriesItem key={item.id}>{item.title}</CatalogCategoriesItem>
                })}
            </ul>
        </article>
    );
}

export default CatalogCategories;
