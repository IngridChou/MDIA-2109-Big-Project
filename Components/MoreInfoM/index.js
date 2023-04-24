import styles from './MoreInfoM.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function MoreInfoM() {
    return (
        <>
            <Link className={styles.link} href="/mdmainfo">
                <button className={styles.button}>More Info
                    <Image src="/arrow.svg" alt="Arrow" width={35} height={35} />
                </button>
            </Link>
        </>
    )
}