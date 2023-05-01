import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/cocaineinfo.module.css'
import PrevButton from '../Components/PrevButton'
import NavBar from '../Components/NavBar'
import MoreInfo from '../Components/MoreInfo'

export default function Cocaineinfo() {
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

        <h1 className={styles.header}>More Info</h1>

        <Image src="/cocainestats.png" alt="mdma" width={246} height={246} />
         <h2 className={styles.header}>Statistics</h2>
         <p clsasName={styles.content}>&#8226;The global cocaine market is estimated to be a 100 billion dollars per year<br />&#8226;The use of cocaine is more prevalent among young adults (18-24) <br />&#8226;Prevalance of cocaine was 2.0% among people living in Canada</p>
        <hr />
        <h2 className={styles.subheading}>Seek Help</h2>
        <p clasName={styles.content}>https://www.wellnesstogether.ca/en-CA <br /> https://www.drugrehab.ca/ <br />https://canaacna.org/</p>

        <h2 className={styles.subheading}>Resources</h2>
        <p className={styles.content}> </p>
        <NavBar />
        </main>
</>



    )
    }
