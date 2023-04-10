import styles from './ButtonL.module.css'
import Image from 'next/image'
import Link from 'next/link'

/**Button for Landing - Get Started */
export default function ButtonL() {
    return (
        <>
            <Link className={styles.link} href="/">
                <button className={styles.button}>Get Started
                    <Image src="/arrow.svg" alt="Arrow" width={35} height={35} />
                </button>
            </Link>
        </>
    )
}