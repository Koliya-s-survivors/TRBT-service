import React from 'react';

// style
import './catalog-genres-item.css';

// interface
export interface CatalogGenresItemProps {
    isActiveGenre: string,
    genre: string,
    genreClick: (genre: string) => void
}

const CatalogGenresItem: React.FunctionComponent<CatalogGenresItemProps> = ({isActiveGenre, genre, genreClick}) => {
    return (
        <li className='catalog-genres-item'>
            <button className={isActiveGenre === genre ? 'catalog-genres-item-active' : ''}
                    onClick={() => genreClick(genre)}>{genre}</button>
        </li>
    );
}

export default CatalogGenresItem;
