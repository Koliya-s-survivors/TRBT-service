import React from 'react';

// CSS
import './catalog-info.css';
import './catalog-info-media.css';

interface CatalogInfoProps {
  activeGenre:string,
  activeCategory:string
}

function CatalogInfo(props: CatalogInfoProps){
    return (
      <article className='catalog-info'>
        <p>Content from <span>"{props.activeGenre}/</span><span>{props.activeCategory}"</span></p>
      </article>
    )
  
}

export default CatalogInfo;