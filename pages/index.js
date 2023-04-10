import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import Card from '../Components/Card'
import ButtonH from '../Components/ButtonH'


export default function Home() {
  return (
    <>
      <Head>
        <title>DrugMinder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.header}>DrugMinder</h1>
        <Card/>
        <ButtonH/>
      </main>
    </>
  )
}
