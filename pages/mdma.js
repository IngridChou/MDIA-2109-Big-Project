import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/mdma.module.css'
import PrevButton from '../Components/PrevButton'
import NavBar from '../Components/NavBar'
import MoreInfoM from '../Components/MoreInfoM'
import Logo from '../Components/Logo'

export default function Mdma() {
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
        <h1 className={styles.header}>MDMA</h1>
        <Image className={styles.img} src="/mdma.png" alt="mdma" width={340} height={246} />

        <p clsasName={styles.content}>MDMA is a synthetic drug that affects the mood and<br />perception by altering neurotransmitters in the <br />brain like serotonin, dopamine, and norepinephrine.</p>
        <hr />
        <h2 className={styles.subheading}>Effects</h2>
        <p className={styles.content}>&#x2022; Feelings of euphoria, happiness, and increased <br /> sociability <br />&#x2022; Heightened sensory perception <br />&#x2022; Increased energy, alertness, and focus</p>
        <hr />
        <h2 className={styles.subheading}>Precautions</h2>
        <p className={styles.content}>&#x2022; Only take MDMA if you are in good physical and <br />mental health<br />&#x2022; Always test your MDMA before taking it <br />&#x2022; Stay hydrated, but dont drink too much water <br />&#x2022; Do not drive or operate heavy machinery while under <br /> the influence of MDMA</p>
        <MoreInfoM />

        <NavBar />
      </main>
    </>
  )
}
