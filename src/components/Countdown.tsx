import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdawn.module.css';

export function Countdawn() {

  const { 
    minutes,
    seconds,
    IsActive,
    hasFinished,
    resetCountdawn,
    startCountdawn 
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

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