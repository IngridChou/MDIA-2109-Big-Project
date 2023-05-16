import Image from 'next/image'
import styles from "./MedRisk.module.css"


export default function MedRisk() {
    return (
        <>
            <div className={styles.main}>
                <p>You are at</p>
                <Image src="/result/med-risk.svg" alt="risk level" width={300} height={100} />
                <p>of over dosing</p>
            </div>
            <div className={styles.instructions}>
                <h2>What should you do?</h2>
                <ul>
                    <li>It is recommended to stop taking any drugs or alcohol at this point</li>
                    <li>Any further consumption may put you at high risk of overdosing</li>
                    <li>Drink water: be sure to drink water to avoid dehydration</li>
                </ul>
            </div>
        </>
    )
}
