import styles from './Card.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function Card() {
    return (
        <>
            <Link href="/resources">
                <button className={styles.container}>
                    <div className={styles.text}>
                        <h2>Looking for a Drug?</h2>
                        <p className={styles.description}>Click here to learn more about drugs</p>
                    </div>
                    <div className={styles.image}>
                        <Image src="/home/drug-card.png" alt="Drug Image" width={155} height={95} />
                    </div>
                </button>
            </Link>
        </>
    )
}