import styles from './ReflectionImg.module.css'
import Image from 'next/image'

export default function ReflectionImg() {
    return(
        <>
            <div className={styles.container}>
                <Image className={styles.img1} src="/reflection/thinking1.svg" alt="Thinking Image" width={327} height={352} />
                <Image className={styles.img2} src="/reflection/thinking2.svg" alt="Thinking Image" width={327} height={352} />
                <Image className={styles.img3} src="/reflection/thinking3.svg" alt="Thinking Image" width={327} height={352} />
            </div>
        </>
    )
}