import { createContext, useState } from "react";
export const SettingsContext = createContext();
import useLocalStorage from "use-local-storage";


export function SettingsProvider({ children }) {
/*   const [containsCounter, setContainsCounter] = useState(10); */ //CANTIDAD DE PALABRAS QUE PUEDEN SALIR CON CONTIENE
/*   const [rollChance, setRollChance] = useState(3); */
  const [containsCounter, setContainsCounter] = useLocalStorage("ContainsCounter", 10);
  const [rollChance, setRollChance] = useLocalStorage("RollChange", 3);
  const [sound, setSound] = useLocalStorage("Sound_On/Off", "");
const [volume, setVolume] = useLocalStorage("SoundVolume", 0.2);

  return (
    <SettingsContext.Provider
      value={{ setContainsCounter, setRollChance, rollChance, containsCounter,setSound,setVolume,sound,volume }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
