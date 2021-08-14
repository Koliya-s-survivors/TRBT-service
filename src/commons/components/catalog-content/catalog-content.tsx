import React from 'react';

// components
import CatalogContentItem from '../catalog-content-item';

// styles
import './catalog-content.css';
import './catalog-content-media.css';


interface CatalogContentProps {
  arrMelodies: Array<CatalogContentItemPropsMelody>
}

interface CatalogContentItemPropsMelody {
  id: number,
  img: any,
  musicName: string,
  artist: string,
  price: string
}


const CatalogContent: React.FC<CatalogContentProps> = (props) => {
  return (
    <article className="catalog-content">
      <ul>
        {props.arrMelodies.map(function (item) {
          return <CatalogContentItem key={item.id} melody={item} />
        })}
      </ul>
    </article>
  )
}

export default CatalogContent;