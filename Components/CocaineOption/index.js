import styles from './Cocaine.module.css'
import Image from 'next/image'

/* Cocaine Option Button in quiz */
export default function CocaineOption() {
    return (
        <>
            <div className={styles.main}>
                <Image src='/drug-choice/cocaine.png' width={45} height={34}/>
                <p>Cocaine</p>
            </div>
        </>
    )
}
