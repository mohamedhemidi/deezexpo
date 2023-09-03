import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { useEffect } from "react";
import {
  topAlbums,
  topTracks,
  viewArtist,
} from "../../services/artist.services";
import { styled } from "styled-components";
import { Loading } from "../../components/Loading";
import moment from "moment";
import { Card } from "../../components/Card";
import { GetArtistResponse } from "../../types/artists";

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
const SectionTop = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
const SectionBottom = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
const ArtistInfo = styled.section<{ picture: string }>`
  position: relative;
  width: 60%;
  height: 20rem;
  background: linear-gradient(
      0deg,
      rgba(255, 0, 150, 0.3),
      rgba(255, 0, 150, 0.3)
    ),
    url(${(props) => props.picture});
  background-size: cover;
  padding: 1rem;
  background-position: right center;
  @media (max-width: 768px) {
    width: 100%;
    height: 20rem;
    padding: 0;
  }
`;
const TopTracks = styled.section`
  background-color: #ffffff;
  padding: 1rem;
  width: 30%;
  height: 20rem;
  overflow: hidden;
  border: 1px solid #0000000d;
  border-radius: 15px;
  ul {
    padding: 1rem;
  }
  li {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 0;
  }
`;
const Name = styled.h1`
  color: #ffffff;
  font-size: 4rem;
`;
const NbFans = styled.h3`
  color: #ffffff;
  font-size: 2rem;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const NbAlbums = styled.h3`
  color: #ffffff;
  font-size: 2rem;
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const TrackItem = styled.h3`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

interface Artists {
  data: GetArtistResponse;
  loading: boolean;
  error: null | string;
}

const ArtistView = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { id } = params;

  const { data, loading } = useAppSelector(
    (state: any): Artists => state.artist
  );

  useEffect(() => {
    dispatch(viewArtist(parseInt(id!)));
    dispatch(topTracks(parseInt(id!)));
    dispatch(topAlbums(parseInt(id!)));
  }, []);
  if (/^\d+$/.test(id!) === false) {
    return <h1>Oops! Invalid artist id</h1>;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      <SectionTop>
        <ArtistInfo picture={data.info.picture_xl}>
          <Name>{data.info.name}</Name>
          <NbFans>{data.info.nb_fan} Fans</NbFans>
          <NbAlbums>{data.info.nb_album} Albums</NbAlbums>
        </ArtistInfo>
        <TopTracks>
          <h2>Top Tracks:</h2>
          {data.top_tracks.map((i: any) => {
            return (
              <TrackItem key={i}>
                <h5>{i.title}</h5>
                <h5>{moment.utc(i.duration * 1000).format("mm:ss")}</h5>
              </TrackItem>
            );
          })}
        </TopTracks>
      </SectionTop>
      <SectionBottom>
        {data.top_albums.map((alb: any) => {
          return (
            <Card
              id={alb.id}
              type="album"
              artist={data.info.name}
              title={alb.title}
              picture={alb.cover_xl}
            />
          );
        })}
      </SectionBottom>
    </Container>
  );
};

export default ArtistView;
