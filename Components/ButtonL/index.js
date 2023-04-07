import styles from './ButtonL.module.css'
import Image from 'next/image'
import Link from 'next/link'

/**Button for Landing - Get Started */
export default function ButtonL() {
    return (
        <>
            <Link href="/reflection">
                <div className={styles.button}>
                    <a>Get Started</a>
                    <Image src="/arrow.png" alt="Drug Image" width={23} height={17} />
                </div>
            </Link>
        </>
    )
}