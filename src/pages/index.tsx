import Head from 'next/head';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { Countdawn } from '../components/Countdown';
import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';
import { GetServerSideProps } from 'next';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <>
      <ChallengesProvider 
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >
        <div className={styles.container}>
          <Head>
            <title>Inicio | Move.it</title>
          </Head>
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
      </ChallengesProvider>
    </>  
  )
}

export const getServerSideProps: GetServerSideProps = async ( ctx ) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}


