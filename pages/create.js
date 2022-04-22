import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import WordForm from "../components/WordForm";
import { WordsContext } from "../context/wordsContext";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function Create() {
  const { vocabulary, setVocabulary } = useContext(WordsContext);
  const { user } = useContext(UserContext);

  function doesWordExist(content) {
    const word = vocabulary.find((element) => {
      return content === element.content ? true : false;
    });

    return word !== undefined ? true : false;
  }

  const handleFormSubmit = (word) => {
    setVocabulary([
      ...vocabulary,
      {
        translation: word.translation,
        content: word.content,
        archived: false,
        id: vocabulary[vocabulary.length - 1].id + 1,
        code: user.selectedLanguage,
      },
    ]);
  };

  return (
    <Layout>
      <main>
        <StyledHeadline>Create a new card</StyledHeadline>

        <WordForm
          onSubmitForm={handleFormSubmit}
          checkIfExists={doesWordExist}
          buttonLabel="Create"
        />
      </main>
      <Navbar />
    </Layout>
  );
}

const StyledHeadline = styled.p`
  color: #26cd7d;
  font-weight: bold;
  font-size: larger;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;
