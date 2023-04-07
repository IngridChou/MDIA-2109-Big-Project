import styles from './ButtonH.module.css'
import Link from 'next/link'
import Image from 'next/image'

/**Button for Home - Introduction, Take a Quiz, Resources */
export default function ButtonH() {
    return (
        <>
            <div className={styles.container}>
                <Link href="/reflection">
                    <div className={styles.intro}>
                        <a>Introduction</a>
                        <Image src="/arrow.png" alt="Drug Image" width={23} height={17}/>
                    </div>
                </Link>
                <Link href="/quiz">
                    <div className={styles.quiz}>
                        <a>Take a Quiz</a>
                        <Image src="/arrow.png" alt="Drug Image" width={23} height={17}/>
                    </div>
                </Link>
                <Link href="/">
                    <div className={styles.resources}>
                        <a>Resources</a>
                        <Image src="/arrow.png" alt="Drug Image" width={23} height={17}/>
                    </div>
                </Link>
            </div>
        </>
    )
}