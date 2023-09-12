import { createContext, useState } from "react";
export const StatusContext = createContext();

export function StatusProvider({ children }) {
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [pending, setPending] = useState(0);

  const [wrongAnswersB, setWrongAnswersB] = useState(0);
  const [rightAnswersB, setRightAnswersB] = useState(0);
  const [pendingB, setPendingB] = useState(0);

  return (
    <StatusContext.Provider
      value={{
        wrongAnswers,
        setWrongAnswers,
        rightAnswers,
        setRightAnswers,
        pending,
        setPending,
        wrongAnswersB,
        setWrongAnswersB,
        rightAnswersB,
        setRightAnswersB,
        pendingB,
        setPendingB,
      }}
    >
      {children}
    </StatusContext.Provider>
  );
}
