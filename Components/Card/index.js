import styles from './Card.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function Card() {
    return(
        <>
        <div className={styles.container}>
            <div className={styles.text}>
                <h2>Looking for a Drug?</h2>
                <p className={styles.description}>Yorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
            </div>
            <div className={styles.image}>
                <Image src="/home/drug-card.png" alt="Drug Image" width={155} height={95}/>
            </div>
        </div>
        </>
    )
}