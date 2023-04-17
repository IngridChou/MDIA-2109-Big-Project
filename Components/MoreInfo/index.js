import styles from './MoreInfo.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function MoreInfo() {
    return (
        <>
            <div className={styles.container}>
                <Link className={styles.link} href="/alcoholinfo">
                    <button className={styles.intro}>More Info
                        <Image src="/arrow.svg" alt="Arrow" width={35} height={35} />
                    </button>
              </Link>
            </div>
        </>
    )
}