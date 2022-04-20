import { createContext, useContext, useEffect, useState } from "react";
import vocabularyMock from "../mock/vocabulary";
import { UserContext } from "./userContext";

export const WordsContext = createContext();

export default function WordsContextProvider({ children }) {
  const [vocabulary, setVocabulary] = useState(vocabularyMock);
  const { user } = useContext(UserContext);

  return (
    <WordsContext.Provider
      value={{
        vocabulary: vocabulary.filter(
          (word) => word.code === user.selectedLanguage
        ),
        setVocabulary,
      }}
    >
      {children}
    </WordsContext.Provider>
  );
}
