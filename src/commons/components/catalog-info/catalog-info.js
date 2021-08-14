import React from 'react';

// CSS
import './catalog-info.css';
import './catalog-info-media.css';

function CatalogInfo(props){   
    return (
      <article className='catalog-info'>
        <p>Content from <span>"{props.activeGenre}/</span><span>{props.activeCategory}"</span></p>
      </article>
    )
  
}

export default CatalogInfo;