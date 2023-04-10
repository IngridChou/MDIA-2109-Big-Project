import styles from './ButtonR.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function ButtonR() {
    return (
        <>
            <div className={styles.button}>
                <Link className={styles.link} href="/quiz">I want to learn more</Link>
                <Image src="/arrow.png" alt="Drug Image" width={23} height={17} />
            </div>
        </>
    )
}