import React from 'react';

// style
import './catalog-categories-item.css';

// interface
interface CatalogCategoriesItemProps {
    isActiveCategory: string
    category: string
    categoryClick: (category: string) => void
}

const CatalogCategoriesItem: React.FunctionComponent<CatalogCategoriesItemProps> = ({isActiveCategory, category, categoryClick}) => {
  return(
    <li className='catalog-categories-item'>
      <button className={isActiveCategory === category ? 'catalog-categories-item-active' : ''} onClick={() => categoryClick(category)}>{category}</button>
    </li>
  );
};

export default CatalogCategoriesItem;
