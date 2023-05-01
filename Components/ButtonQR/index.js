import styles from './ButtonQR.module.css'
import Image from 'next/image'
import Link from 'next/link'

/**Button for Quiz Results - Learn More */
export default function ButtonQR() {
    return (
        <>
            <Link className={styles.link} href="/resources">
                <button className={styles.button}>Learn More
                    <Image src="/arrow.svg" alt="Arrow" width={35} height={35} />
                </button>
            </Link>
        </>
    )
}