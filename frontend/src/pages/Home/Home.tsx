import { Card } from "../../components/Card";
import { Section } from "../../components/Section";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { getTrendingTracks } from "../../services/tracks.services";

interface Track {
  title: string;
  duration: number;
  picture: string;
  artist: Artist[];
  album: Album[];
}

interface Album {
  id: number;
}
interface Artist {
  id: number;
  name: string;
}

interface GetTrackResponose {
  trending: Track[];
  search: Track[];
}
interface Tracks {
  data: GetTrackResponose[];
  loading: boolean;
  error: null | string;
}

const Home = () => {
  const dispatch = useAppDispatch();

  const { data, loading } = useAppSelector((state): Tracks => state.tracks);

  useEffect(() => {
    dispatch(getTrendingTracks());
  }, []);

  return (
    <>
      {data.search && data.search.length ? (
        <Section title="Search Results for" loading={loading}>
          {data.search &&
            data.search.length &&
            data.search.map((t) => {
              return (
                <Card
                  key={t.id}
                  id={t.id}
                  type="track"
                  title={t.title}
                  artist={t.artist.name}
                  artistId={t.artist.id}
                  duration={t.duration}
                  picture={t.artist.picture_big}
                />
              );
            })}
        </Section>
      ) : null}
      <Section title="Most trending Tracks" loading={loading}>
        {data.trending &&
          data.trending.length &&
          data.trending.map((t) => {
            return (
              <Card
                key={t.id}
                id={t.id}
                type="track"
                title={t.title}
                artist={t.artist.name}
                artistId={t.artist.id}
                duration={t.duration}
                picture={t.artist.picture_big}
              />
            );
          })}
      </Section>
    </>
  );
};

export default Home;
