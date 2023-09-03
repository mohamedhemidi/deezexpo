interface Album {
  id: number;
  cover_xl: string;
  title: string;
}
interface Track {
  id: number;
  key: any;
  title: string;
  duration: number;
  picture: string;
  artist: Artist;
  album: Album;
}

interface Artist {
  id: number;
  name: string;
  artistId: number;
  picture_big: string;
  nb_album: number;
  nb_fan: number;
  picture_xl: string;
}
export interface GetArtistResponse {
  info: Artist;
  top_tracks: Track[];
  top_albums: Album[];
}
