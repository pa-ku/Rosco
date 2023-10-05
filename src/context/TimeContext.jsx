import { createContext, useState, useEffect } from "react";
export const TimeContext = createContext();
import useLocalStorage from "use-local-storage";

export function TimeProvider({ children }) {
  const [prevtime, setPrevTime] = useLocalStorage("time", {
    ms: 0,
    s: 180,
    m: 0,
    h: 0,
  });
  const [time, setTime] = useState(prevtime);
  const [interv, setInterv] = useState();
  const [timeRunning, setTimeRunning] = useState(false);

  const start = () => {
    run();
    setInterv(setInterval(run, 10));
    setTimeRunning(true);
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

  useEffect(() => {
    console.log(time);
    if (time.s === 0) {
      stop();
      alert("SE TERMINO EL TIEMPO");
    }
  }, [time]);

  return (
    <TimeContext.Provider
      value={{
        timeRunning,
        setTimeRunning,
        setTime,
        setPrevTime,
        start,
        stop,
        time,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
}
