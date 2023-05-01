import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/about.module.css'
import NavBar from '../Components/NavBar'
import PrevButton from '../Components/PrevButton'

export default function About() {
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
        <h1 className={styles.header}>About Us</h1>
        <div classNames={styles.about}>
          <Image src='/full-logo.svg' width={300} height={60}/>
          <p>DrugMinder is a free mobile app that allows users to test for overdosing on cocaine, MDMA, and alcohol. It also provides information for users to learn more about the drugs, including recommended dosages, symptoms of overdosing, and precautions.</p>
        </div>
        <div className={styles.allprofiles}>
        <div className={styles.profiles}>
          <Image src='/profile.svg' width={175} height={175 }/>
          <h2>Ingrid</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div className={styles.profiles}>
          <Image src='/profile.svg' width={175} height={175 }/>
          <h2>Wendy</h2>
          <p>One of DrugMinder's developers that mainly focuses on visual design.</p>
        </div>
        <div className={styles.profiles}>
          <Image src='/profile.svg' width={175} height={175 }/>
          <h2>Paul</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        </div>
        <NavBar/>
      </main>
    </>
  )
}