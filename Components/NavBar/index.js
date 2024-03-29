import styles from './NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'


/* Nav Bar */
export default function NavBar() {
    return (
        <>
            <div className={styles.main}>
                <Link href='/quizLanding'>
                    <Image src="/quiz-icon.svg" width={36} height={36} />
                </Link>
                <Link href='/home'>
                    <Image src="/home.svg" width={36} height={36} />
                </Link>
                <Link href='/resources'>
                    <Image src="/info-icon.svg" width={36} height={36} />
                </Link>
            </div>
        </>
    )
}
