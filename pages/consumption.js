import styles from '../styles/consumption.module.css'
import OnePillOption from '../Components/1pillOption'
import TwoPillOption from '../Components/2pillOption'
import ThreePillOption from '../Components/3pillOption'
import Next from "../Components/Next"
import NavBar from "../Components/NavBar"
import ProgressBar2 from '../Components/QuizProgressBar/QuizProgressBar2'
import Link from 'next/link'
import PrevButton from '../Components/PrevButton'

export default function Consumption() {
    return (
        <>
        <div className={styles.main}>
            <PrevButton/>
            <h2>Step 2 of 3</h2>
            <ProgressBar2/>
            <h1>Select the Dosage taken within XX</h1>
            <div className={styles.options}>
                <OnePillOption/>
                <TwoPillOption />
                <ThreePillOption />
                <Link className={styles.nextButton} href='/weight'>
                        <Next />
                    </Link>
            </div>
            <NavBar />
            </div>

        </>
    )
}