import React from 'react';

// components
import CatalogContentItem from '../catalog-content-item';

// CSS
import './catalog-content.css';
import './catalog-content-media.css';

function CatalogContent(props) {
  return (
    <article className="catalog-content">
      <ul>
        {props.objMelodies.map(function (item) {
          return <CatalogContentItem key={item.id} melody={item} />
        })}
      </ul>
    </article>
  )
}

export default CatalogContent;