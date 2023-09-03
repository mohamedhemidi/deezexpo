interface Track {
    id: number;
    title: string;
    duration: number;
    picture: string;
    artist: Artist;
    album: Album;
  }
  
  interface Album {
    id: number;
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
  
  export interface GetTrackResponose {
    trending: Track[];
    search: Track[];
    keyword: string;
  }
  