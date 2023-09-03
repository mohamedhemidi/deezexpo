import { Card } from "../../components/Card";
import { Section } from "../../components/Section";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import {
  getTrendingTracks,
} from "../../services/tracks.services";

const Home = () => {
  const dispatch = useAppDispatch();

  const { data, loading } = useAppSelector((state) => state.tracks);

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
                  type="track"
                  title={t.title}
                  artist={t.artist.name}
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
                type="track"
                title={t.title}
                artist={t.artist.name}
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
