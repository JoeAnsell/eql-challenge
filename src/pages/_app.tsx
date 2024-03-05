import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { useEffect, useState, createContext } from "react";

import { QuestionData } from "@/types";

export const QuestionsContext = createContext([]);

export default function App({ Component, pageProps }: AppProps) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/questions");
      const jsonData = await response.json();
      setQuestions(jsonData);
    };

    fetchData();
  }, []);

  return (
    <QuestionsContext.Provider value={[...questions]}>
      <Component {...pageProps} />
    </QuestionsContext.Provider>
  );
}
