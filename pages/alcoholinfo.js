import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/alcoholinfo.module.css'
import PrevButton from '../Components/PrevButton'
import NavBar from '../Components/NavBar'
import Graph from '../Components/Graph'

export default function Alcoholinfo() {
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

        <h1 className={styles.header}>Alcohol</h1>
        <Graph/>
        <h2 className={styles.header}>Statistics</h2>
         <p clsasName={styles.content}>&#8226;77% of Canadians aged 15 years or older reported consuming alcohol in the past year<br />&#8226;Alcohol is the most commonly used psychoactive substance in Canada <br />&#8226;Prevalance of heavy drinking is highest among young adults (18-24)</p>
        <hr />

        <h2 className={styles.subheading}>Seek Help</h2>
        <p className={styles.content}>https://www.wellnesstogether.ca/en-CA <br /> https://www.drugrehab.ca/ <br />https://canaacna.org/</p>

        <h2 className={styles.subheading}>References</h2>
        <p className={styles.content}>https://ccsa.ca/sites/default/files/2022-10/CCSA-MDMA-Ecstasy-Drug-Summary-2022-en.pdf</p>
        <a href="https://ccsa.ca/sites/default/files/2022-10/CCSA-MDMA-Ecstasy-Drug-Summary-2022-en.pdf">Click here to visit Example.com</a>
    
        <NavBar />
        </main>

</>

    )
    }
