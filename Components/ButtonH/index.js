import styles from './ButtonH.module.css'
import Link from 'next/link'
import Image from 'next/image'

/**Button for Home - Introduction, Take a Quiz, Resources */
export default function ButtonH() {
    return (
        <>
            <div className={styles.container}>
                <Link className={styles.link} href="/reflection">
                    <button className={styles.intro}>Introduction
                        <Image src="/arrow.svg" alt="Arrow" width={35} height={35} />
                    </button>
                </Link>
                <Link className={styles.link} href="/quiz">
                    <button className={styles.quiz}>Take a Quiz
                        <Image src="/arrow.svg" alt="Arrow" width={35} height={35} />
                    </button>
                </Link>
                <Link className={styles.link} href="/about">
                    <button className={styles.about}>About Us
                        <Image src="/arrow.svg" alt="Arrow" width={35} height={35} />
                    </button>
                </Link>
            </div>
        </>
    )
}