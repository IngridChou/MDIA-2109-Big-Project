import Image from 'next/image'
import styles from "./MedRisk.module.css"


export default function MedRisk() {
    return (
        <>
            <Image src="/result/med-risk.svg" alt="risk level" width={300} height={100} />
        </>
    )
}