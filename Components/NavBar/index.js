import styles from './NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'


/* Nav Bar */
export default function NavBar() {
    return (
        <>
            <div className={styles.main}>
                <Link href='/quiz.js'>
                    <Image src="/quiz-icon.png" width={36} height={36} />
                </Link>
                <Link href='/'>
                    <Image src="/home.png" width={36} height={36} />
                </Link>
                <Link href='/resources.js'>
                    <Image src="/info-icon.png" width={36} height={36} />
                </Link>
            </div>
        </>
    )
}
