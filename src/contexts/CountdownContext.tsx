import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";


interface CountdownProviderProps {
  children: ReactNode
}

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  IsActive: boolean;
  startCountdawn: () => void;
  resetCountdawn: () => void;
}

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({children}: CountdownProviderProps) {

  let countdownTimeout: NodeJS.Timeout;
  
  const {startNewChallenge} = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [IsActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdawn() {
    setIsActive(true);
  }

  function resetCountdawn() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
    setHasFinished(false);
  }

  useEffect(() => {
    if(IsActive && time > 0) {
      countdownTimeout = global.setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    }else if ( IsActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [IsActive, time])

  return(
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      IsActive,
      startCountdawn,
      resetCountdawn
    }}>
      {children}
    </CountdownContext.Provider>
  )
}