import Head from 'next/head';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { Countdawn } from '../components/Countdown';
import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from '../components/ChallengeBox';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Move.it</title>
      </Head>
      <div className={styles.container}>
        <ExperienceBar />

        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdawn />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </div>
    </>  
  )
}
