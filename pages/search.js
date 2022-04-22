import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Dialog, AppBar } from "@mui/material";
import Image from "next/image";
import Fuse from "fuse.js";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import SearchList from "../components/SearchList";
import WordForm from "../components/WordForm";
import SubmitButton from "../components/SubmitButton";
import { SearchBar } from "../components/SearchBar";
import { WordsContext } from "../context/wordsContext";

const fuse = new Fuse([], {
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
  const { vocabulary, setVocabulary } = useContext(WordsContext);
  const [result, setResult] = useState([]);
  const [item, setItem] = useState(null);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fuse.setCollection(vocabulary);
    setResult(search(term));
  }, [vocabulary, term]);

  const handleSearch = (searchTxt) => {
    setTerm(searchTxt);

    setResult(search(searchTxt));
  };

  const updateItem = (item) => {
    setVocabulary(
      vocabulary.map((word) => {
        if (word.id === item.id) {
          return { ...item };
        }

        return word;
      })
    );

    setItem(null);
  };

  const handleClick = () => {
    item.archived = false;
    updateItem(item);
  };

  const handleDeleteClick = () => {
    if (confirm("Do you really want to delete this word?")) {
      setVocabulary(
        vocabulary.filter((word) => (word.id === item.id ? false : true))
      );

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
            <ButtonWrapper>
              <SubmitButton onClick={handleClick}>
                Back into collection
              </SubmitButton>
            </ButtonWrapper>
          )}
          <DeleteButtonWrapper>
            <StyledDeleteButton onClick={handleDeleteClick}>
              Delete
            </StyledDeleteButton>
          </DeleteButtonWrapper>
        </Dialog>

        <Navbar />
      </StyledMain>
    </Layout>
  );
}

const StyledMain = styled.main`
  padding: 10px 0;
`;

const StyledHeadline = styled.p`
  color: #26cd7d;
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

const ButtonWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
`;

const StyledDeleteButton = styled.button`
  border: none;
  cursor: pointer;
  min-width: 4rem;
  padding: 1rem 1.5rem;
  border-radius: 40px;
  background-color: #e25252;
  color: white;
`;

const DeleteButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.8rem;
`;
