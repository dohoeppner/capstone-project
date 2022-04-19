import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import WordForm from "../components/WordForm";
import vocabulary from "../mock/vocabulary";

export default function Create() {
  function doesWordExist(content) {
    const word = vocabulary.find((element) => {
      return content === element.content ? true : false;
    });

    return word !== undefined ? true : false;
  }

  const handleFormSubmit = (word) => {
    vocabulary.push({
      translation: word.translation,
      content: word.content,
      archived: false,
      id: vocabulary[vocabulary.length - 1].id + 1,
    });
  };

  return (
    <Layout>
      <StyledMain>
        <StyledHeadline>Create a new card</StyledHeadline>

        <WordForm
          onSubmitForm={handleFormSubmit}
          checkIfExists={doesWordExist}
          buttonLabel="Create"
        />
      </StyledMain>
      <Navbar />
    </Layout>
  );
}

const StyledMain = styled.main`
  padding: 20px;
`;

const StyledHeadline = styled.p`
  color: #21bc72;
  font-weight: bold;
  font-size: larger;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;
