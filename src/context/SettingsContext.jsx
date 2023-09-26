import { createContext } from "react";
export const SettingsContext = createContext();
import useLocalStorage from "use-local-storage";

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useLocalStorage("settings", {
    mode: "normal",
    sound: false,
    rollChance: 0,
    volume: 1,
    time: { ms: 0, s: 180, m: 0, h: 0 },
    teamTable: false,
    containsWords: 0,
  });

  return (
    <SettingsContext.Provider
      value={{
        setSettings,
        settings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
