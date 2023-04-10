import styles from '../styles/drug-choice.module.css'
import AlcoholOption from "../Components/AlcoholOption"
import MdmaOption from "../Components/MdmaOption"
import CocaineOption from "../Components/CocaineOption"
import Next from "../Components/Next"
import NavBar from "../Components/NavBar"
import ProgressBar1 from "../Components/QuizProgressBar1"
import Link from 'next/link'

export default function DrugChoice() {
    return (
        <>
            <div className={styles.main}>
                <h2>Step 1 of 3</h2>
                <ProgressBar1 />
                <h1>Select a Substance to Test for</h1>
                <div className={styles.options}>
                    <AlcoholOption />
                    <MdmaOption />
                    <CocaineOption />
                    <Link className={styles.nextButton} href='/consumption'>
                        <Next />
                    </Link>

                </div>
                <NavBar />
            </div>

        </>
    )
}