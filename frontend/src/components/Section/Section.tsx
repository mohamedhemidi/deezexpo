import { styled } from "styled-components";

interface Props {
  title: string;
  children: React.ReactNode;
}
const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 5rem;
`;
const Title = styled.h2`
  color: var(--textColorLight);
  width: 100%;
  display: block;
  margin-bottom: 1.2rem;
`;
const SectionContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 0;
`;
const Section = ({ title, children }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SectionContent>{children}</SectionContent>
    </Container>
  );
};

export default Section;
