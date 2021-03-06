import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { startCountdawn, resetCountdawn } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdawn();
  }
  
  function handleChallengeFailed() {
    resetChallenge();
    resetCountdawn();
  } 

  return(
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main> 
            <img src={`icons/${activeChallenge.type}.svg`} alt="Icon Corpo"/>
            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
             type="button"
             className={styles.challengeSucceededButton}
             onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
        <strong>Iniciar um ciclo para receber desafios a serem completados</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Up"/>
          Avance de Level completando desafios
        </p>
      </div>
      )}
    </div>
  )
}