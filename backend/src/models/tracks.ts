export default interface Track {
    title : string,
    duration: number,
    artist : Artist[]
    album : Album[]
}

interface Album {
    id: number
}
interface Artist {
    id: number,
    name : string
}

export type GetTracksResponse = {
    data: Track[];
};