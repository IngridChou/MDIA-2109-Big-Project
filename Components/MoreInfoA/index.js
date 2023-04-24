import styles from './MoreinfoA.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function MoreInfoA() {
    return (
        <>
            <Link className={styles.link} href="/alcoholinfo">
                <button className={styles.button}>More Info
                    <Image src="/arrow.svg" alt="Arrow" width={35} height={35} />
                </button>
            </Link>
        </>
    )
}