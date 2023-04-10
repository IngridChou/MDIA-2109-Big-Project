import styles from './Alcohol.module.css'
import Image from 'next/image'

/* Alcohol Option Button in quiz */
export default function AlcoholOption() {
    return (
        <>
            <div className={styles.main}>
                <Image src='/drug-choice/alcohol.png' width={23} height={43}/>
                <p>Alcohol</p>
            </div>
        </>
    )
}
