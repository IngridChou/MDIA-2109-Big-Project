import styles from './ProgressBar.module.css'

/* Top progress bar in quiz */
export default function ProgressBar1() {
    return (
        <>
            <div className={styles.inprogress} />
            <div className={styles.mainbar}>
                <div className={styles.section} />
            </div>
        </>
    )
}
