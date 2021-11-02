import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

  const {level} = useContext(ChallengesContext);
  
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/patrickcavalcante.png" alt="Patrick Cavalcante" />
      <div>
        <strong>Patrick Cavalcante</strong>
        <p>
          <img src="icons/level.svg" alt="icon levelUp"/>
          {level}
        </p>
      </div>
    </div>
  );
}