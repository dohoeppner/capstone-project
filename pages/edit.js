import Layout from "../components/Layout";
import WordForm from "../components/WordForm";
import styled from "styled-components";
import vocabulary from "../mock/vocabulary";

export default function Edit() {
  const id = 16;
  const word = vocabulary.find((w) => w.id === id);

  const handleSubmitForm = (updatedWord) => {
    vocabulary = vocabulary.map((word) => {
      if (word.id === updatedWord.id) {
        return { ...updatedWord };
      }

      return word;
    });
  };

  return (
    <Layout>
      <main>
        <StyledHeadline>Edit this word / translation</StyledHeadline>
        <WordForm
          word={word}
          buttonLabel="Edit"
          onSubmitForm={handleSubmitForm}
        />
      </main>
    </Layout>
  );
}

const StyledHeadline = styled.p`
  color: #21bc72;
  font-weight: bold;
  font-size: larger;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;
