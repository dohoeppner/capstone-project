import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import ToggleButton from "../components/ToggleButton";
import CheckButton from "../components/CheckButton";
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import FailureButton from "../components/FailureButton";
import ContinueButton from "../components/ContinueButton";
import { WordsContext } from "../context/wordsContext";

export default function Learn() {
  const { getLearningCollection, setVocabulary, pickableItems } =
    useContext(WordsContext);
  const [showTranslation, setShowTranslation] = useState(false);
  const [collection, setCollection] = useState(getLearningCollection());
  const [displayButtons, setDisplayButtons] = useState(false);
  const [actionButtonsClicked, setActionButtonsClicked] = useState(false);

  useEffect(() => {
    setShowTranslation(false);
    setDisplayButtons(false);
    setActionButtonsClicked(false);
  }, [collection]);

  function checkHandleClick(id, success) {
    setVocabulary((currentVocabulary) => {
      return currentVocabulary.map((word) => {
        if (word.id === id) {
          return { ...word, archived: success };
        }
        return word;
      });
    });

    setCollection((currentCollection) => {
      if (currentCollection.length > 1) {
        return currentCollection.filter((word) => {
          return word.id !== id;
        });
      }

      return currentCollection;
    });

    setActionButtonsClicked(true);
  }

  const card = collection[0];

  return (
    <Layout>
      <StyledMain>
        {pickableItems.length === 0 && (
          <StyledMessage>{"Congratulations! Time to rest!"}</StyledMessage>
        )}

        {pickableItems.length !== 0 && (
          <>
            {card && (
              <>
                <Card
                  content={card.content}
                  translation={card.translation}
                  showTranslation={showTranslation}
                />

                <ButtonWrapper>
                  <FailureButton
                    className={displayButtons ? "visible" : ""}
                    handleClick={() => checkHandleClick(card.id, false)}
                  />
                  <ToggleButton
                    handleClick={() => {
                      setShowTranslation(!showTranslation);
                      setDisplayButtons(true);
                    }}
                  />

                  <CheckButton
                    className={displayButtons ? "visible" : ""}
                    handleClick={() => checkHandleClick(card.id, true)}
                  />
                </ButtonWrapper>
              </>
            )}
            {collection.length === 1 && actionButtonsClicked && (
              <ContinueButton
                handleClick={() => setCollection(getLearningCollection())}
              />
            )}
          </>
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

const StyledMessage = styled.div`
  border: 2px solid #c18cf9;
  border-radius: 5px;
  color: #333333;
  width: 100%;
  max-width: 16rem;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  margin: 0 auto;
  background: #b8c0ff;
`;
