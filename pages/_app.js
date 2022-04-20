import "../styles/globals.css";
import WordsContextProvider from "../context/wordsContext";
import LanguagesContextProvider from "../context/languagesContext";
import UserContextProvider from "../context/userContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <LanguagesContextProvider>
        <WordsContextProvider>
          <Component {...pageProps} />
        </WordsContextProvider>
      </LanguagesContextProvider>
    </UserContextProvider>
  );
}
