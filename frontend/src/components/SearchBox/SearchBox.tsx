import styled from "styled-components";
import { RoundButtonIcon } from "../Core/Buttons";
import { PiMagnifyingGlassBold } from "react-icons/Pi";
import { useState } from "react";
import { useAppDispatch } from "../../utils/hooks";
import { searchTracks } from "../../services/tracks.services";

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
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState("");

  const handleSearchSubmit = () => {
    if (search.length) {
      dispatch(searchTracks(search));
    }
  };
  return (
    <Container>
      <SearchInput
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tracks"
        type="text"
      />
      <RoundButtonIcon
        onClick={handleSearchSubmit}
        icon={<PiMagnifyingGlassBold />}
      />
    </Container>
  );
};

export default SearchBox;
