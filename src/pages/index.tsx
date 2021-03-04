import Head from 'next/head';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { Countdawn } from '../components/Countdown';
import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownContext, CountdownProvider } from '../contexts/CountdownContext';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Move.it</title>
      </Head>
      <div className={styles.container}>
        <ExperienceBar />

        <section>
          <CountdownProvider>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdawn />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </CountdownProvider>
        </section>
      </div>
    </>  
  )
}
