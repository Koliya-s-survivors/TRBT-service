export interface Service {
    arrMelodies: Melody[]
    genres: Genre[]
    isActiveGenre: string
    isActiveCategory: string
}

export interface Melody {
    id: number
    img: string
    musicName: string
    artist: string
    price: string
}

export interface Genre {
    id: number
    genre: string
    categories: Category[]
}

export interface Category {
    id: number
    fk_genres_id: number
    title: string
}
