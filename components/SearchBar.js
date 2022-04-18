import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";

export function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  return (
    <StyledForm
      onSubmit={(event) => {
        event.preventDefault();
        onSearch(search);
      }}
    >
      <InputFieldWrapper>
        <StyledInputField
          type="text"
          placeholder="Search for a word..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <StyledSearchButton type="submit">
          <Image
            width="20"
            height="20"
            src="/icons/search.svg"
            alt="SearchIcon"
          ></Image>
        </StyledSearchButton>
      </InputFieldWrapper>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledInputField = styled.input`
  border: 1px solid #ddddf0;
  border-radius: 5px;
  width: calc(100% - 55px);
  padding: 0.5rem 0.5rem;
  margin-top: 1rem;
  margin-bottom: 0.7rem;
`;

const InputFieldWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: calc(280px - 2 * 1rem);
  max-width: 600px;
  width: 100%;
  gap: 5px;
`;

const StyledSearchButton = styled.button`
  background-color: lavender;
  border-radius: 50%;
  border: none;
  min-height: 50px;
  min-width: 50px;
  cursor: pointer;
`;
