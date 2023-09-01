interface Album {
    id: number,
    title : string,
    release_date: string,
    fans: number,
    cover_big: string
}

export type GetAlbumResponse = {
    data: Album[];
};