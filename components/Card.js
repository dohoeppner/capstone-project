import styled from "styled-components";

export default function Card({ showTranslation, translation, content }) {
  return (
    <StyledCard>
      <CardContent className={showTranslation ? "hidden" : ""}>
        {content}
      </CardContent>
      <CardContent className={!showTranslation ? "hidden" : ""}>
        {translation}
      </CardContent>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  background-color: #fcfcff;
  box-shadow: 0px 0px 25px 6px rgba(193, 193, 209, 0.52);
  color: black;
  font-weight: 300;
  padding: 10px;
  margin: 0 auto;
  max-width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const CardContent = styled.p`
  text-align: center;

  &.hidden {
    display: none;
  }
`;
