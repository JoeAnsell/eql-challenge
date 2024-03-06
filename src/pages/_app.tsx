import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { useEffect, useState, createContext } from "react";
import { useRouter } from "next/router";

export const QuestionsContext = createContext([]);

export default function App({ Component, pageProps }: AppProps) {
  const [questions, setQuestions] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/questions");
      const jsonData = await response.json();
      setQuestions(jsonData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const currentQuestionIndex = localStorage.getItem(`current_question_index`);
    if (
      router.asPath === "/summary" &&
      Number(currentQuestionIndex) < questions.length
    ) {
      router.push("/quiz");
    }
  }, [questions, router]);

  return (
    <QuestionsContext.Provider value={[...questions]}>
      <Component {...pageProps} />
    </QuestionsContext.Provider>
  );
}
