import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { useEffect, useState, createContext } from "react";

import type { QuestionData } from "@/types";

export const QuestionsContext = createContext<QuestionData>([]);

export default function App({ Component, pageProps }: AppProps) {
  const [questions, setQuestions] = useState<QuestionData>([]);

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
