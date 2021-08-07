import React from 'react';

// components
import CatalogGenresItem from '../catalog-genres-item';

// style
import './catalog-genres.css';
import './catalog-genres-media.css';

// interface
export interface CatalogGenresProps {
    genres: any[], //item description required
    isActiveGenre: boolean,
    genreClick: () => void
}

const CatalogGenres: React.FunctionComponent<CatalogGenresProps> = ({genres, isActiveGenre, genreClick}) => {
    return(
        <article className='catalog-genres'>
            <section>
                <p>Genres</p>
            </section>
            <ul>
                {genres.map(item => {
                    return <CatalogGenresItem key={item.id} isActiveGenre={isActiveGenre} genre={item.genre} genreClick={genreClick}/>
                })}
            </ul>
        </article>
    );
}

export default CatalogGenres;
