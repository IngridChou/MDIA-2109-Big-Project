import styles from './40kg.module.css'
import Image from 'next/image'

/* 40-50kg Option Button in quiz */
export default function FortyKgOption() {
    return (
        <>
            <div className={styles.main}>
                <Image src='/weight/scale.png' width={37} height={37}/>
                <p>40kg ~ 50kg</p>
            </div>
        </>
    )
}
