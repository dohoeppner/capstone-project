import styled from "styled-components";

export default function ContinueButton({ handleClick }) {
  return (
    <ButtonWrapper>
      <StyledContinueButton onClick={handleClick}>
        Continue
      </StyledContinueButton>
    </ButtonWrapper>
  );
}

const StyledContinueButton = styled.button`
  background-color: lavender;
  color: black;
  font-size: 1rem;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 40px;
  font-family: Roboto !important;
  font-weight: 400;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;
