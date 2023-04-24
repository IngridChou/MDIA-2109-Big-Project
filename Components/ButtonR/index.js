import styles from './ButtonR.module.css'
import Link from 'next/link'
import Image from 'next/image'

/**Button for Reflection - I want to learn more */
export default function ButtonR() {
    return (
        <>
            <Link className={styles.link} href="/quizLanding">
                <button className={styles.button}>I want to learn more
                    <Image src="/arrow.svg" alt="Arrow" width={35} height={35} />
                </button>
            </Link>
        </>
    )
}