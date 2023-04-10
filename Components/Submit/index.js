import styles from './Submit.module.css'
import Image from 'next/image'

/* Submit Option Button in quiz */
export default function Submit() {
    return (
        <>
            <div className={styles.main}>
                <p>Submit</p>
                <Image src='/arrow.png' width={23.07} height={16.51}/>
            </div>
        </>
    )
}
