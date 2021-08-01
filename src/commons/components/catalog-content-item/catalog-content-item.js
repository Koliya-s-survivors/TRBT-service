import React from 'react';

// CSS
import './catalog-content-item.css';

function CatalogContentItem(props) {
  const { img, musicName, artist, price } = props.melody;

  return (
    <li className="catalog-content-list-item">
    <article>
        {/* <div>{ img }</div> */}
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