import styles from './ButtonRes.module.css'
import Image from 'next/image'
import Link from 'next/link'

/**Button for Resources Main - Alcohol, MDMA, Cocaine */
export default function ButtonRes() {
    return (
        <>
            <div className={styles.container}>
                <Link className={styles.link} href="/alcohol">
                    <button className={styles.alcohol}>
                        <Image src='/drug-choice/alcohol.svg' width={23} height={43} />
                        Alcohol
                    </button>
                </Link>
                <Link className={styles.link} href="/mdma">
                    <button className={styles.mdma}>
                        <Image src='/drug-choice/mdma.svg' width={45} height={43} />
                        MDMA
                    </button>
                </Link>
                <Link className={styles.link} href="/cocaine">
                    <button className={styles.cocaine}>
                        <Image src='/drug-choice/cocaine.svg' width={47} height={43} />
                        Cocaine
                    </button>
                </Link>
            </div>
        </>
    )
}