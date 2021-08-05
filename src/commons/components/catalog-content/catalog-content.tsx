import React from 'react';

// components
import CatalogContentItem from '../catalog-content-item';

// CSS
import './catalog-content.css';
import './catalog-content-media.css';


interface CatalogContentProps { 
  objMelodies: Array<CatalogContentItemPropsMelody>
}

interface CatalogContentItemPropsMelody {
  id:number,
  img: any,
  musicName: string,
  artist: string,
  price: number,
}
   

function CatalogContent(props: CatalogContentProps) {
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