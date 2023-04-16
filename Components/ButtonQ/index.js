import styles from './ButtonQ.module.css'
import Image from 'next/image'
import Link from 'next/link'

/**Button for Quiz Intro - Start Quiz */
export default function ButtonQ() {
    return (
        <>
            <Link className={styles.link} href="/drug-choice">
                <button className={styles.button}>Start Quiz
                    <Image src="/arrow.svg" alt="Arrow" width={35} height={35} />
                </button>
            </Link>
        </>
    )
}