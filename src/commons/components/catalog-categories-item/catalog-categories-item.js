import React from 'react';

// style
import './catalog-categories-item.css';

const CatalogCategoriesItem = (props) => {
  return(
    <li className='catalog-categories-item'>
      <button className={props.isActiveCategory === props.category ? 'catalog-categories-item-active' : null} onClick={(e) => props.categoryClick(e.target.innerText)}>{props.category}</button>
    </li>
  );
};

export default CatalogCategoriesItem;
