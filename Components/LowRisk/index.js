import Image from 'next/image'
import styles from "./LowRisk.module.css"


export default function LowRisk() {
    return (
        <>
            <Image src="/result/low-risk.svg" alt="risk level" width={300} height={100} />
        </>
    )
}