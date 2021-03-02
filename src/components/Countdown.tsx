import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdawn.module.css';

export function Countdawn() {

  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const segunds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(segunds).padStart(2, '0').split('');

  function startCountdawn() {
    setActive(true);
  }

  useEffect(() => {
    if(active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    }
  }, [active, time])

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
      <button 
        type="button" 
        className={styles.countdownButton}
        onClick={startCountdawn}
      >
        Iniciar um ciclo
      </button>
    </div>
  )
}