import { createContext, useState } from "react";
export const TimeContext = createContext();
import useLocalStorage from "use-local-storage";


export function TimeProvider({ children }) {
  const [storedTime, setStoredTime] = useLocalStorage("storedTime", {
    ms: 0,
    s: 140,
    m: 1,
    h: 0,
  });
  const [time, setTime] = useState(storedTime);
  const [interv, setInterv] = useState();
  const [timeRunning, setTimeRunning] = useState(false);

  const start = () => {
    run();

    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH--;
      updatedM = 0;
    }
    if (updatedS === 0) {
      updatedM--;
      updatedS = 60;
    }
    if (updatedMs === 0) {
      updatedS--;
      updatedMs = 100;
    }
    updatedMs--;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    clearInterval(interv);
  };

  const reset = () => {
    clearInterval(interv);
    setTime(storedTime);
  };

  if (time === 0) {
    stop();
  }

  return (
    <TimeContext.Provider
      value={{
        timeRunning,
        setTimeRunning,
        reset,
        start,
        stop,
        time,
        storedTime,
        setStoredTime,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
}
