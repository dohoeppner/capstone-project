import { createContext, useEffect, useState } from "react";
import vocabularyMock from "../mock/vocabulary";

export const WordsContext = createContext();

export default function WordsContextProvider({ children }) {
  const [vocabulary, setVocabulary] = useState(vocabularyMock);

  useEffect(() => {
    console.log(vocabulary);
  });

  return (
    <WordsContext.Provider value={{ vocabulary, setVocabulary }}>
      {children}
    </WordsContext.Provider>
  );
}
