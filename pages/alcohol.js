import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/alcohol.module.css'
import PrevButton from '../Components/PrevButton'
import NavBar from '../Components/NavBar'
import MoreInfoA from '../Components/MoreInfoA'
import Logo from '../Components/Logo'

export default function Alcohol() {
  return (
    <>
      <Head>
        <title>DrugMinder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className={styles.main}>
        <PrevButton />
        <Logo/>
        <h1 className={styles.header}>Alcohol</h1>
        <Image className={styles.img} src="/alcohol.png" alt="alcohol" width={340} height={246} />
        <p clsasName={styles.content}>Alcohol is a widely used psychoactive substance<br />that is consumed for its intoxicating effects. It is a <br />depressant that affects the central nervous system.</p>
        <hr />
        <h2 className={styles.subheading}>Effects</h2>
        <p className={styles.content}> Feelings of pleasure, relaxation, and increased <br /> heartbeat <br />Slow reaction time and impaired coordination <br />Reduced inhibitions, leading to risky behavior<br />Headaches, dehydration, and impaired memory </p>
        <hr />
        <h2 className={styles.subheading}>Precautions</h2>
        <p className={styles.content}>Only consume alcohol if you are in good physical and <br />mental health <br />Avoid mixing alcohol with medications <br />Stay hydrated, and make sure to eat before <br /> consuming alcohol <br />Do not drive or operate heavy machinery while under <br /> the influence of alcohol</p>
        <MoreInfoA />
        <NavBar />
      </main>
    </>
  )
}
