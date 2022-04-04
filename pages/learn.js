import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import ToggleButton from "../components/ToggleButton";
import CheckButton from "../components/CheckButton";
import { useState, useEffect } from "react";
import styled from "styled-components";
import FailureButton from "../components/FailureButton";
import ContinueButton from "../components/ContinueButton";

export default function Learn() {
  const [showTranslation, setShowTranslation] = useState(false);
  const [words, setWords] = useState(frenchVocabulary);
  const [index, setIndex] = useState(0);
  const [card, setCard] = useState(null);
  const [displayButtons, setDisplayButtons] = useState(false);
  const [actionButtonsClicked, setActionButtonsClicked] = useState(false);

  // Related to card changes
  useEffect(() => {
    setCard(() => words[index]);
    setActionButtonsClicked(false);
  }, [index, words]);

  // Related to words changes (new set of words)
  useEffect(() => {
    setIndex(0);
  }, [words]);

  // Related to change index (go to next card)
  useEffect(() => {
    setShowTranslation(false);
    setDisplayButtons(false);
  }, [index]);

  function checkHandleClick() {
    setActionButtonsClicked(true);

    setIndex((currentIndex) => {
      if (currentIndex < words.length - 1) {
        return currentIndex + 1;
      }

      return currentIndex;
    });
  }

  return (
    <Layout>
      <StyledMain>
        {card && (
          <Card
            content={card.content}
            translation={card.translation}
            showTranslation={showTranslation}
          />
        )}
        <ButtonWrapper>
          {displayButtons && <FailureButton handleClick={checkHandleClick} />}
          <ToggleButton
            handleClick={() => {
              setShowTranslation(!showTranslation);
              setDisplayButtons(true);
            }}
          />
          {displayButtons && <CheckButton handleClick={checkHandleClick} />}
        </ButtonWrapper>
        {index === frenchVocabulary.length - 1 && actionButtonsClicked && (
          <ContinueButton handleClick={() => setWords(frenchVocabularyTwo)} />
        )}
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
    id: 1,
  },
  {
    content: "s'énerver",
    translation: "sich aufregen",
    id: 2,
  },
  {
    content: "la farine",
    translation: "Mehl",
    id: 3,
  },
];

const frenchVocabularyTwo = [
  {
    content: "avoir raison",
    translation: "recht haben",
    id: 4,
  },
  {
    content: "la plate-bande",
    translation: "Beet, Rabatte",
    id: 5,
  },
  {
    content: "la jonquille",
    translation: "Osterglocke, Narzisse",
    id: 6,
  },
];
