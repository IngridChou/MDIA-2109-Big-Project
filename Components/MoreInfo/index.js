import styles from './MoreInfo.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function MoreInfo() {
    return (
        <>
            <Link className={styles.link} href="/cocaineinfo">
                <button className={styles.button}>More Info
                    <Image src="/arrow.svg" alt="Arrow" width={35} height={35} />
                </button>
            </Link>
        </>
    )
}