import { createContext, useState } from "react";
import languageMock from "../mock/languages";

export const LanguagesContext = createContext();

export default function LanguagesContextProvider({ children }) {
  const [languages, setLanguages] = useState(languageMock);

  return (
    <LanguagesContext.Provider value={{ languages, setLanguages }}>
      {children}
    </LanguagesContext.Provider>
  );
}
