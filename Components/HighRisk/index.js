import Image from 'next/image'
import styles from "./HighRisk.module.css"


export default function HighRisk() {
    return (
        <>
            <div className={styles.main}>
                <p>You are at</p>
                <Image src="/result/high-risk.svg" alt="risk level" width={300} height={100} />
                <p>of over dosing</p>
            </div>
            <div className={styles.instructions}>
                <h2>What should you do?</h2>
                <ul>
                    <li>Call 911 immediately!! Overdosing can be fatal, your life could be in danger!</li>
                    <li>Do NOT take any more drugs or alcohol at this point</li>
                    <li>Have information ready on age, pre-existing conditions, drug allergies, and the dosage amount taken to provide to emergency responders.</li>
                    <li>Stay in the recovery position, doing so will help prevent choking if vomiting occurs.</li>
                </ul>
            </div>
        </>
    )
}
