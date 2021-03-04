import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdawn.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdawn() {

  const {startNewChallenge} = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [IsActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const segunds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(segunds).padStart(2, '0').split('');

  function startCountdawn() {
    setIsActive(true);
  }

  function resetCountdawn() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(0.1 * 60)
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
    <div>
      <div className={styles.countdawnContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button 
          disabled
          className={styles.countdownButton}
        >
        Ciclo Encerrado
      </button>
      ) : (
        <>
          { IsActive ? (
            <button 
              type="button" 
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdawn}
            > Abandonar Ciclo
            </button>
          ) : (
            <button 
              type="button" 
              className={styles.countdownButton}
              onClick={startCountdawn}
            > Iniciar Ciclo
            </button>
          )}
        </>
      )}
    </div>
  )
}