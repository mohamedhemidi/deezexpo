import { Card } from "../../components/Card";
import { Section } from "../../components/Section";

const Home = () => {
  return (
    <>
      <Section title="Most trending Tracks">
        <Card
          type="track"
          title="Hello"
          artist="Adele"
          duration={295}
          picture="https://e-cdns-images.dzcdn.net/images/artist/e5fc443d2abc03b487234ba4de65a001/500x500-000000-80-0-0.jpg"
        />
      </Section>
      <Section title="Most trending Albums">
        <Card
          type="album"
          title="The Marshall Mathers LP"
          artist="Eminem"
          nb_tracks={18}
          picture="https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg"
        />
      </Section>
    </>
  );
};

export default Home;
