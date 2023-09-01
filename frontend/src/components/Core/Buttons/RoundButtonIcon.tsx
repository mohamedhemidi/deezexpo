import styled from "styled-components";

interface Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon: React.ReactNode;
}

const Container = styled.div`
  border-radius: 50%;
`;
const Button = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  outline: none;
  padding: 0.5rem;
  border: 0px;
  cursor: pointer;
  font-size: 1.2rem;
  color: #ffffff;
  background-color: #ff8303;
  &:hover {
    background-color: #ffc284;
  }
`;

const RoundButtonIcon = ({ onClick, icon }: Props) => {
  return (
    <Container>
      <Button onClick={onClick}>{icon}</Button>
    </Container>
  );
};

export default RoundButtonIcon;
