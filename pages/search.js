import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import SearchList from "../components/SearchList";
import styled from "styled-components";
import vocabulary from "../mock/vocabulary";
import { SearchBar } from "../components/SearchBar";
import { Dialog, AppBar } from "@mui/material";
import Image from "next/image";
import WordForm from "../components/WordForm";

import Fuse from "fuse.js";
import { useState } from "react";

const fuse = new Fuse(vocabulary, {
  keys: ["content", "translation"],
  includeScore: true,
  includeMatches: true,
  minMatchCharLength: 3,
  useExtendedSearch: true,
});

function search(term) {
  return fuse
    .search(`'${term}`)
    .filter((match) => match.score <= 0.25)
    .map((match) => match.item);
}

export default function Search() {
  const [result, setResult] = useState([]);
  const [item, setItem] = useState(null);
  const [term, setTerm] = useState("");

  const handleSearch = (searchTxt) => {
    setTerm(searchTxt);

    setResult(search(searchTxt));
  };

  const updateItem = (item) => {
    vocabulary = vocabulary.map((word) => {
      if (word.id === item.id) {
        return { ...item };
      }

      return word;
    });

    // Update collection and search result
    fuse.setCollection(vocabulary);
    setResult(search(term));

    // Close the modal
    setItem(null);
  };

  const handleClick = () => {
    item.archived = false;
    updateItem(item);
  };

  const handleDeleteClick = () => {
    if (confirm("Do you really want to delete this word?")) {
      vocabulary = vocabulary.filter((word) => {
        if (word.id === item.id) {
          return false;
        } else {
          return true;
        }
      });
      fuse.setCollection(vocabulary);
      setResult(search(term));

      setItem(null);
    }
  };

  return (
    <Layout>
      <StyledMain>
        <StyledHeadline>Search in your collection</StyledHeadline>
        <StyledSearchSection>
          <SearchBar onSearch={handleSearch} />
        </StyledSearchSection>
        <SearchList result={result} handleClick={(item) => setItem(item)} />
      </StyledMain>

      <Dialog fullScreen open={item ? true : false}>
        <AppBar
          sx={{
            boxShadow: "none",
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            paddingTop: "0.5rem",
            paddingRight: "0.5rem",
          }}
          position="relative"
          color="transparent"
        >
          <StyledCloseButton onClick={() => setItem(null)}>
            <Image
              width="15"
              height="15"
              src="/icons/x_white.svg"
              alt="FailureIcon"
            ></Image>
          </StyledCloseButton>
        </AppBar>
        <WordForm word={item} onSubmitForm={updateItem} buttonLabel="Edit" />
        {item?.archived && (
          <button onClick={handleClick}>Back into collection</button>
        )}
        <button onClick={handleDeleteClick}>Delete</button>
      </Dialog>

      <Navbar />
    </Layout>
  );
}

const StyledMain = styled.main`
  padding: 10px 0;
`;

const StyledHeadline = styled.p`
  color: #21bc72;
  font-weight: bold;
  font-size: larger;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const StyledSearchSection = styled.section`
  display: flex;
  justify-content: center;
`;

const StyledCloseButton = styled.button`
  border: none;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: black;
  display: flex;
  align-items: center;
`;
