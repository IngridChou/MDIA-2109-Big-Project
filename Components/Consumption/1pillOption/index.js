import styles from './1pill.module.css'
import Image from 'next/image'

/* 1 pill Option Button in quiz */
export default function OnePillOption() {
    return (
        <>
            <div className={styles.main}>
                <Image src='/consumption/1-pill.png' width={31} height={31}/>
                <p>0.1g (1 pill)</p>
            </div>
        </>
    )
}
