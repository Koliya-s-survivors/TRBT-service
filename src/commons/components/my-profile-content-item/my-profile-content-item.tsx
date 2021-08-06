import React from 'react';

// styles
import './my-profile-content-item.css'
import './my-profile-content-item-media.css'


interface MyProfileContentItemProps  {
  musicName: string,
  artist: string,
  img: string,
  dataPurchase: string,
  paidPeriod: string,
}


const MyProfileContentItem = ({ img = 'someUrl', musicName = 'Тема усатого нян', artist = 'А. Рыбников', dataPurchase = '2017-06-22 10:33:14', paidPeriod = '2017-07-02 00:00:00' }:MyProfileContentItemProps) => {

  return (
    <li className="my-profile-content-item">
    <article>
        <section>
          <article>
            {/* <img src=`${img}` alt="img" /> */}
              <img src="./assets/img/Layer 6.png" alt="img" />
          </article>
          <article>
              <h3>{musicName}</h3>
              <p>{artist}</p>
              <a href="#"><img src="./assets/img/catalog-content-list-item-icon/info.png" alt="icon" /></a>
          </article>      
        </section>

        <section>
          <p>Data of purchase: { dataPurchase }</p>
          <p>Paid period: { paidPeriod }</p>
          
          <article>
            <input type='checkbox' />
            <p>default play</p>
          </article>
          <article>
            <input type='checkbox' />
            <p>autoprologation</p>
          </article>

          <button>Remove content</button>
          
        </section>
    </article>
    </li>
  )
};

export default MyProfileContentItem;
