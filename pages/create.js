import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import SubmitButton from "../components/SubmitButton";
import InputField from "../components/InputField";
import styled from "styled-components";
import { useEffect, useState } from "react";
import vocabulary from "../mock/vocabulary";

const defaultState = { word: "", translation: "" };

export default function Create() {
  const [state, setState] = useState(defaultState);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [state]);

  function handleSubmit(event) {
    event.preventDefault();

    if (doesWordExist(state.word)) {
      setError(true);
    } else {
      setState(defaultState);
      vocabulary.push({
        translation: state.translation,
        content: state.word,
        id: vocabulary[vocabulary.length - 1].id + 1,
      });
    }
  }

  function doesWordExist(content) {
    const word = vocabulary.find((element) => {
      return content === element.content ? true : false;
    });

    return word !== undefined ? true : false;
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setState((currentStateValue) => {
      return {
        ...currentStateValue,
        [name]: value,
      };
    });
  }

  return (
    <Layout>
      <StyledMain>
        <StyledHeadline>Create a new card</StyledHeadline>

        {error && <p>Word is already in your collection</p>}

        <StyledForm onSubmit={handleSubmit} method="post">
          <StyledList>
            <li>
              <StyledLabel>Foreign language:</StyledLabel>
              <br />
              <InputField
                onChange={handleChange}
                value={state.word}
                type="text"
                name="word"
                placeholder="Add new word/expression"
                required
              />
            </li>
            <li>
              <StyledLabel>Translation:</StyledLabel>
              <br />
              <StyledTextarea
                onChange={handleChange}
                value={state.translation}
                name="translation"
                rows="5"
                cols="35"
                placeholder="Add translation of the word/expression"
                required
              />
            </li>
            <ButtonWrapper>
              <SubmitButton>Create</SubmitButton>
            </ButtonWrapper>
          </StyledList>
        </StyledForm>
      </StyledMain>
      <Navbar />
    </Layout>
  );
}

const StyledMain = styled.main`
  padding: 20px;
`;
const StyledForm = styled.form`
  margin: 0 auto;
  font-family: Roboto, sans-serif;
  color: #39393d;
  display: flex;
  justify-content: center;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledHeadline = styled.p`
  color: #21bc72;
  font-weight: bold;
  font-size: larger;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const StyledLabel = styled.label`
  font-weight: bolder;
`;

const ButtonWrapper = styled.li`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
`;

const StyledTextarea = styled.textarea`
  border-radius: 5px;
  font-family: Roboto !important;
  padding: 0.3rem 0.5rem;
`;
