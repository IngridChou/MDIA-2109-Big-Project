import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/alcohol.module.css'
import PrevButton from '../Components/PrevButton'
import NavBar from '../Components/NavBar'

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
            <PrevButton/>

            <h1 className={styles.header}>Alcohol</h1>
            <Image src="quiz/alcohol.png" alt="alcohol" width={246} height={246}/>
            <h2 className={styles.subheading}>Description</h2>
            <p clsasName={styles.content}>Alcohol is a widely used psychoactive substance<br/>that is consumed for its intoxicating effects. It is a <br/>depressant that affects the central nervous system.</p>

            <h2 className={styles.subheading}>Effects</h2>
            <p className={styles.content}>&#x2022; Feelings of pleasure, relaxation, and increased <br/> heartbeat <br/>&#x2022; Slow reaction time and impaired coordination <br/>Reduced inhibitions, leading to risky behavior<br/>&#x2022; Headaches, dehydration, and impaired memory </p>

            <h2 className={styles.subheading}>Precautions</h2>
         <p className={styles.content}>&#x2022; Only consume alcohol if you are in good physical and <br/>mental health <br/>&#x2022; Avoid mixing alcohol with medications <br/>&#x2022; Stay hydrated, and make sure to eat before <br/> consuming alcohol <br/>&#x2022; Do not drive or operate heavy machinery while under <br/> the influence of alcohol</p>
            <NavBar/>




          </main>
          </>
    )
}
