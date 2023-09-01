interface Artist {
    id: number,
    name : string,
    nb_album: number,
    nb_fan: number,
    picture_big: string
}

export type GetArtistResponse = {
    data: Artist[];
};