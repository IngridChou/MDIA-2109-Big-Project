import Image from 'next/image'
import styles from "./HighRisk.module.css"


export default function HighRisk() {
    return (
        <>
            <Image src="/result/high-risk.svg" alt="risk level" width={300} height={100} />
        </>
    )
}
