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
                    <li>Call emergency services immediately. Provide them your location and follow their instructions carefully</li>
                    <li>Administer naloxone. Follow the instructions on the package or or ask for guidance from emergency services</li>
                    <li>Place them in the recovery position to prevent them from choking on vomit</li>
                </ul>
            </div>
        </>
    )
}