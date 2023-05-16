import Image from 'next/image'
import styles from "./LowRisk.module.css"


export default function LowRisk() {
    return (
        <>
            <div className={styles.main}>
                <p>You are at</p>
                <Image src="/result/low-risk.svg" alt="risk level" width={300} height={100} />
                <p>of over dosing</p>
            </div>
            <div className={styles.instructions}>
                <h2>What should you do?</h2>
                <ul>
                    <li>Proceed with caution: make sure to educate yourself on the recommended dosage before further consumption</li>
                    <li>Drink water: be sure to drink water to avoid dehydration</li>
                </ul>
            </div>
        </>
    )
}
