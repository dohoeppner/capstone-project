import styled from "styled-components";
import Image from "next/image";
import { useState, useEffect } from "react";

const defaultState = { label: "", code: "" };

export default function LanguageForm({ onSubmit, languages }) {
  const [state, setState] = useState(defaultState);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(languages.find((item) => item.code === state.code) ? true : false);
  }, [state.code, languages]);

  function handleSubmit(event) {
    event.preventDefault();
    setState(defaultState);
    onSubmit(state);
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
      <StyledHeadline>Create a new language</StyledHeadline>

      {error && <p>Error: code already exists !!!</p>}

      <StyledForm onSubmit={handleSubmit} action="#" method="post">
        <StyledList>
          <li>
            <StyledLabel>Add a new learning language:</StyledLabel>
            <br />
            <StyledInputField
              onChange={handleChange}
              value={state.label}
              type="text"
              name="label"
              required
            />
          </li>
          <li>
            <StyledLabel>Add the language international Code:</StyledLabel>
            <br />
            <StyledInputField
              onChange={handleChange}
              value={state.code}
              type="text"
              name="code"
              placeholder="i.e. en, fr, it, no etc."
              required
              minLength={2}
            />
          </li>
          <ButtonWrapper>
            <StyledAddButton disabled={error}>Add language</StyledAddButton>
          </ButtonWrapper>
        </StyledList>
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

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledInputField = styled.input`
  border: 1px solid grey;
  border-radius: 5px;
  min-width: 250px;
  padding: 0.3rem 0.5rem;
  margin-top: 0.3rem;
  margin-bottom: 0.7rem;
`;

const StyledAddButton = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  border-radius: 40px;
  background-color: #26cd7d;
  color: white;
  padding: 1rem 1.5rem;
  min-width: 4rem;
  font-weight: 400;

  &:disabled {
    opacity: 0.5;
  }
`;

const StyledHeadline = styled.p`
  color: #21bc72;
  font-weight: bold;
  font-size: large;
  display: flex;
  justify-content: center;
`;

const StyledLabel = styled.label`
  font-size: smaller;
`;

const ButtonWrapper = styled.li`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
`;
