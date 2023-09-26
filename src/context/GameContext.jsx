import { createContext, useState } from "react";
export const GameContext = createContext();
import useLocalStorage from "use-local-storage";

export function GameProvider({ children }) {
  const [settings, setSettings] = useLocalStorage("settings", {
    mode: "normal",
    sound: false,
    teamTable: false,
    rollChance: 3,
    containsWords: 10,
    volume: 0,
    time: { ms: 0, s: 140, m: 0, h: 0 },
  });

  const [answerHandler, setAnswerHandler] = useState({
    wrongAnswersA: 0,
    rightAnswersA: 0,
    pendingA: 0,
    rightAnswersB: 0,
    wrongAnswersB: 0,
    pendingB: 0,
  });

  return (
    <GameContext.Provider
      value={{
        setSettings,
        settings,
        answerHandler,
        setAnswerHandler,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
