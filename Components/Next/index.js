import styles from './Next.module.css'
import Image from 'next/image'

/* Next Option Button in quiz */
export default function Next() {
    return (
        <>
            <div className={styles.main}>
                <p>Next</p>
                <Image src='/arrow.png' width={23.07} height={16.51}/>
            </div>
        </>
    )
}
