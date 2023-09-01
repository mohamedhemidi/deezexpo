import styled from "styled-components";
import { RoundButtonIcon } from "../Core/Buttons";
import { PiMagnifyingGlassBold } from "react-icons/Pi";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const SearchInput = styled.input`
  padding: 0.3rem 1rem;
  border-radius: 25px;
  border: 1px solid #0000004a;
  outline: none;
`;

const SearchBox = () => {
  return (
    <Container>
      <SearchInput type="text" />
      <RoundButtonIcon icon={<PiMagnifyingGlassBold />} />
    </Container>
  );
};

export default SearchBox;
