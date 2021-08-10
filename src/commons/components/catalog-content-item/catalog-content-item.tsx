import React from 'react';

// styles
import './catalog-content-item.css';

interface CatalogContentItemProps {
  id: number,
  melody: CatalogContentItemPropsMelody
}

interface CatalogContentItemPropsMelody {
  img: any,
  musicName: string,
  artist: string,
  price: number,
}

const CatalogContentItem: React.FC<CatalogContentItemProps> = (props) => {
  const { img, musicName, artist, price } = props.melody;

  return (
    <li className="catalog-content-list-item">
      <article>        
        <section>
          <img src="./assets/img/Layer 6.png" alt="img" />
        </section>
        <section>
          <h3>{musicName}</h3>
          <p>{artist}</p>
        </section>
        <section>
          <p>{price}</p>
          <a href="#"><img src="./assets/img/catalog-content-list-item-icon/shopping.png" alt="icon" /></a>
          <a href="#"><img src="./assets/img/catalog-content-list-item-icon/gift.png" alt="icon" /></a>
          <a href="#"><img src="./assets/img/catalog-content-list-item-icon/info.png" alt="icon" /></a>
        </section>
      </article>
    </li>
  )
}

export default CatalogContentItem;