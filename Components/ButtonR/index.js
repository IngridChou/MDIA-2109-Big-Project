import styles from './ButtonR.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function ButtonR() {
    return (
        <>
            <Link className={styles.link} href="/quiz">
                <button className={styles.button}>I want to learn more
                    <Image src="/arrow.svg" alt="Drug Image" width={35} height={35} />
                </button>
            </Link>
        </>
    )
}