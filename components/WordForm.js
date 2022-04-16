import styled from "styled-components";
import InputField from "./InputField";
import Textarea from "./Textarea";
import SubmitButton from "./SubmitButton";
import { useEffect, useState } from "react";

const defaultState = { content: "", translation: "" };

export default function WordForm({
  word,
  onSubmitForm,
  buttonLabel,
  checkIfExists,
}) {
  const [state, setState] = useState(defaultState);
  const [error, setError] = useState(false);
  const isEditing = word ? true : false;

  useEffect(() => {
    setError(false);
  }, [state]);

  useEffect(() => {
    if (word) {
      setState({
        content: word.content,
        translation: word.translation,
      });
    }
  }, [word]);

  function handleSubmit(event) {
    event.preventDefault();

    if (isEditing) {
      onSubmitForm({
        ...word,
        ...state,
      });
    } else {
      if (checkIfExists(state.content)) {
        setError(true);
      } else {
        onSubmitForm(state);
        setState(defaultState);
      }
    }
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
    <div>
      {error && <p>Word is already in your collection</p>}
      <StyledForm onSubmit={handleSubmit} method="post">
        <div>
          <StyledLabel>Foreign language:</StyledLabel>

          <InputField
            onChange={handleChange}
            value={state.content}
            type="text"
            name="content"
            placeholder="Add new word/expression"
            readOnly={isEditing}
            required
          />

          <StyledLabel>Translation:</StyledLabel>

          <Textarea
            onChange={handleChange}
            value={state.translation}
            name="translation"
            rows="5"
            cols="35"
            placeholder="Add translation of the word/expression"
            required
          />

          <ButtonWrapper>
            <SubmitButton>{buttonLabel}</SubmitButton>
          </ButtonWrapper>
        </div>
      </StyledForm>
    </div>
  );
}

const StyledForm = styled.form`
  margin: 0 auto;
  font-family: Roboto, sans-serif;
  color: #39393d;
  display: flex;
  justify-content: center;
`;

const StyledLabel = styled.label`
  font-weight: bolder;
  display: block;
`;

const ButtonWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
`;
