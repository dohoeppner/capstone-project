import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import SubmitButton from "../components/SubmitButton";
import InputField from "../components/InputField";
import styled from "styled-components";
import { useState } from "react";

const defaultState = { word: "", translation: "" };

export default function Create({ onSubmit }) {
  const [state, setState] = useState(defaultState);

  function handleSubmit(event) {
    event.preventDefault();
    setState(defaultState);
    //onSubmit(state);
  }

  return (
    <Layout>
      <StyledMain>
        <StyledHeadline>Create a new card</StyledHeadline>

        <StyledForm onSubmit={handleSubmit} method="post">
          <StyledList>
            <li>
              <StyledLabel>Foreign language:</StyledLabel>
              <br />
              <InputField
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
