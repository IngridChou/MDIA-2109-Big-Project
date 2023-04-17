import styles from './ProgressBar2.module.css'

/* Top progress bar in quiz */
export default function ProgressBar2() {
    return (
        <>
        <div className={styles.main}>
            <div className={styles.inprogress} />
            <div className={styles.mainbar}>
                {/* <div className={styles.section} /> */}
            </div>
            </div>
        </>
    )
}
