import React from 'react';

// styles
import './catalog-info.css';
import './catalog-info-media.css';

interface CatalogInfoProps {
  activeGenre: string,
  activeCategory: string
}

const CatalogInfo: React.FC<CatalogInfoProps> = (props) => {
  return (
    <article className='catalog-info' >
      <p>Content from <span>"{props.activeGenre}/</span><span>{props.activeCategory}"</span></p>
    </article>
  )
}

export default CatalogInfo;