import { styled } from "styled-components";
import moment from "moment";
import { Link } from "react-router-dom";
interface Props {
  id: number;
  artistId?: number;
  type: string;
  title: string;
  picture: string;
  artist: string;
  duration?: number;
  nb_tracks?: number;
}

const Container = styled.div`
  max-width: 260px;
  width: 100%;
  background: linear-gradient(#f5f5f5, #ffffff);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 4px 7px 1px #ffffff,
    inset 0 -5px 20px rgba(173, 186, 204, 0.25), 0 2px 6px rgba(0, 21, 64, 0.14),
    0 10px 20px rgba(0, 21, 64, 0.05);
  cursor: pointer;
`;
const CardTop = styled.div`
  width: 100%;
  overflow: hidden;
  min-height: 200px;
  height: 200px;
  font-size: 1.7rem;
  position: relative;
  h1 {
    position: absolute;
    color: #ffffff;
    z-index: 9;
    left: 1rem;
    width: 100%;
    top: 1rem;
    overflow: hidden;
    clear: both;
  }
`;
const CardBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem;
`;

const Picture = styled.div<{ picture: string }>`
  height: 100%;
  width: 100%;
  background: linear-gradient(
      0deg,
      rgba(255, 0, 150, 0.3),
      rgba(255, 0, 150, 0.3)
    ),
    url(${(props) => props.picture});
  background-size: cover;
  background-position: right center;
  color: #ffffff;
  padding: 1rem;
  background-repeat: no-repeat;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  &:hover {
    background-size: fill;
    background-position: right center;
    -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }
`;

const Card = ({
  type,
  title,
  picture,
  artist,
  artistId,
  nb_tracks,
  duration,
}: Props) => {
  return (
    <Container>
      <CardTop>
        <h1>{title}</h1>
        <Picture picture={picture}></Picture>
      </CardTop>
      <CardBottom>
        <h4>
          By <Link to={`/artist/${artistId}`}>{artist}</Link>
        </h4>
        {type === "track" ? (
          <h4>{duration && moment.utc(duration * 1000).format("mm:ss")}</h4>
        ) : (
          <h4>{nb_tracks} Tracks</h4>
        )}
      </CardBottom>
    </Container>
  );
};
export default Card;
