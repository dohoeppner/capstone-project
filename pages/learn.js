import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import ToggleButton from "../components/ToggleButton";
import CheckButton from "../components/CheckButton";
import { useState } from "react";
import styled from "styled-components";
import FailureButton from "../components/FailureButton";
import Button from "../components/Button";

export default function Learn() {
  const [showTranslation, setShowTranslation] = useState(false);
  const [newCard, setNewCard] = useState(false);

  return (
    <Layout>
      <StyledMain>
        <Card
          content="Bonjour"
          translation="Guten Tag"
          showTranslation={showTranslation}
        />
        <ButtonWrapper>
          <FailureButton />
          <ToggleButton
            handleClick={() => setShowTranslation(!showTranslation)}
          />
          <CheckButton />
        </ButtonWrapper>
        <Button />
      </StyledMain>
      <Navbar />
    </Layout>
  );
}

const StyledMain = styled.main`
  margin-top: 5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
`;

const frenchVocabulary = [
  {
    content: "meilleur/e",
    translation: "besser",
  },
  {
    content: "s'énerver",
    translation: "sich aufregen",
  },
  {
    content: "la farine",
    translation: "Mehl",
  },
  {
    content: "avoir raison",
    translation: "recht haben",
  },
  {
    content: "la plate-bande",
    translation: "Beet, Rabatte",
  },
  {
    content: "la jonquille",
    translation: "Osterglocke, Narzisse",
  },
];
