import styled from "styled-components";

export default function ContinueButton() {
  return (
    <ButtonWrapper>
      <StyledContinueButton>Continue</StyledContinueButton>
    </ButtonWrapper>
  );
}

const StyledContinueButton = styled.button`
  background-color: lavender;
  color: black;
  font-size: 1rem;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  font-family: Roboto;
`;
