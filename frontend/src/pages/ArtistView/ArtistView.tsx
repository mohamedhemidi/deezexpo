import { useParams } from "react-router-dom";

const ArtistView = () => {
  const params = useParams();
  const { id } = params;

  if (/^\d+$/.test(id!) === false) {
    return <h1>Oops! Invalid artist id</h1>;
  }
  return (
    <>
      <h1>ArtistView</h1>
      <h1>{id}</h1>
    </>
  );
};

export default ArtistView;
