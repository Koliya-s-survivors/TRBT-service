import React from 'react';

// style
import './catalog-categories-item.css';

const CatalogCategoriesItem = ({isActiveCategory, category, categoryClick}) => {
  return(
    <li className='catalog-categories-item'>
      <button className={isActiveCategory === category ? 'catalog-categories-item-active' : null} onClick={() => categoryClick(category)}>{category}</button>
    </li>
  );
};

export default CatalogCategoriesItem;
