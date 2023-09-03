import styled from "styled-components";
import { SearchBox } from "../../SearchBox";
import { Link } from "react-router-dom";

const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: #ffffff;
  border-bottom: 1px solid #0000000d;
  display: flex;
  padding: 0.8rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Logo = styled.h1``;

const Header = () => {
  return (
    <Container>
      <Logo>
        <a href={"/"}>{import.meta.env.VITE_APP_NAME}</a>
      </Logo>
      <SearchBox />
    </Container>
  );
};

export default Header;
