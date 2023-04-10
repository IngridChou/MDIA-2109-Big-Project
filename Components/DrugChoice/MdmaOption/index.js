import styles from './Mdma.module.css'
import Image from 'next/image'

/* MDMA Option Button in quiz */
export default function MdmaOption() {
    return (
        <>
            <div className={styles.main}>
                <Image src='/drug-choice/mdma.png' width={47} height={43}/>
                <p>MDMA</p>
            </div>
        </>
    )
}
