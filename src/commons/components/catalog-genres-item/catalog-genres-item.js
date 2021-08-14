import React from 'react';

// style
import './catalog-genres-item.css';

const CatalogGenresItem = (props) => {
    return(
        <li className='catalog-genres-item'>
            <button className={props.isActiveGenre === props.genre ? 'catalog-genres-item-active' : null} onClick={(e) => props.genreClick(e.target.innerText)}>{props.genre}</button>
        </li>
    );
}

export default CatalogGenresItem;
