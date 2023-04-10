import styles from './3pill.module.css'
import Image from 'next/image'

/* 3 pills Option Button in quiz */
export default function ThreePillOption() {
    return (
        <>
            <div className={styles.main}>
                <Image src='/consumption/3-pills.png' width={45} height={45}/>
                <p>0.3g (3 pills)</p>
            </div>
        </>
    )
}
