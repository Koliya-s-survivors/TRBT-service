import React from 'react';

// style
import './catalog-genres.css';
import './catalog-genres-media.css';

// components
import CatalogGenresItem from '../catalog-genres-item';

const CatalogGenres = (props) => {
    return(
        <article className='catalog-genres'>
            <section>
                <p>Genres</p>
            </section>
            <ul>
                {props.genres.map(item => {
                    return <CatalogGenresItem key={item.id} isActiveGenre={props.isActiveGenre} genre={item.genre} genreClick={props.genreClick}/>
                })}
            </ul>
        </article>
    );
}

export default CatalogGenres;
