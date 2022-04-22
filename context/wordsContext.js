import { createContext, useContext, useState } from "react";
import vocabularyMock from "../mock/vocabulary";
import { UserContext } from "./userContext";

export const WordsContext = createContext();

export default function WordsContextProvider({ children }) {
  const [vocabulary, setVocabulary] = useState(vocabularyMock);
  const { user } = useContext(UserContext);

  const selectedLanguageWords = vocabulary.filter(
    (word) => word.code === user.selectedLanguage
  );

  const pickableItems = selectedLanguageWords.filter(
    (item) => item.archived === false
  );

  const getLearningCollection = () => {
    return shuffleSlice(pickableItems);
  };

  return (
    <WordsContext.Provider
      value={{
        vocabulary: selectedLanguageWords,
        setVocabulary,
        pickableItems,
        getLearningCollection,
      }}
    >
      {children}
    </WordsContext.Provider>
  );
}

function shuffleSlice(arr, len = 5) {
  const limit = arr.length < len ? arr.length : len;
  const result = [];
  const source = [...arr];

  while (result.length < limit) {
    const index = Math.floor(Math.random() * source.length);
    const [picked] = source.splice(index, 1);
    result.push(picked);
  }

  return result;
}
