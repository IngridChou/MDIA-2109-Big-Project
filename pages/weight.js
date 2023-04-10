import styles from '../styles/weight.module.css'
import FortyKgOption from '../Components/40kgOption'
import FiftyKgOption from '../Components/50kgOption'
import SixtyKgOption from '../Components/60kgOption'
import Submit from '../Components/Submit'
import NavBar from "../Components/NavBar"
import ProgressBar3 from "../Components/QuizProgressBar/QuizProgressBar3"
import Link from 'next/link'
import PrevButton from '../Components/PrevButton'

export default function Weight() {
    return (
        <>
        <div className={styles.main}>
            <PrevButton/>
            <h2>Step 3 of 3</h2>
            <ProgressBar3/>
            <h1>Select your Body Weight</h1>
            <div className={styles.options}>
                <FortyKgOption/>
                <FiftyKgOption />
                <SixtyKgOption />
                <Link className={styles.nextButton} href='/results'>
                        <Submit />
                    </Link>
            </div>
            <NavBar />
            </div>

        </>
    )
}