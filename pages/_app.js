import "../styles/globals.css";
import WordsContextProvider from "../context/wordsContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <WordsContextProvider>
      <Component {...pageProps} />
    </WordsContextProvider>
  );
}
