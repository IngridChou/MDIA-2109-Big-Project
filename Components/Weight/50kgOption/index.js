import styles from './50kg.module.css'
import Image from 'next/image'

/* 51 ~ 60kg Option Button in quiz */
export default function FiftyKgOption() {
    return (
        <>
            <div className={styles.main}>
            <Image src='/weight/scale.png' width={37} height={37}/>
                <p>51kg ~ 60kg</p>
            </div>
        </>
    )
}
