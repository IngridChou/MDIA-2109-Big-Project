import styles from './ButtonH.module.css'
import Link from 'next/link'
import Image from 'next/image'

/**Button for Home - Introduction, Take a Quiz, Resources */
export default function ButtonH() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.intro}>
                    <Link className={styles.link} href="/reflection">Introduction</Link>
                    <Image src="/arrow.png" alt="Drug Image" width={23} height={17} />
                </div>
                <div className={styles.quiz}>
                    <Link className={styles.link} href="/quiz">Take a Quiz</Link>
                    <Image src="/arrow.png" alt="Drug Image" width={23} height={17} />
                </div>
                <div className={styles.about}>
                    <Link className={styles.link} href="/">About Us</Link>
                    <Image src="/arrow.png" alt="Drug Image" width={23} height={17} />
                </div>
            </div>
        </>
    )
}