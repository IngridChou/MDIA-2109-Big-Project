import styles from './ButtonL.module.css'
import Image from 'next/image'
import Link from 'next/link'

/**Button for Landing - Get Started */
export default function ButtonL() {
    return (
        <>
            <div className={styles.button}>
                <Link href="/reflection">Get Started</Link>
                <Image src="/arrow.png" alt="Drug Image" width={23} height={17} />
            </div>
        </>
    )
}