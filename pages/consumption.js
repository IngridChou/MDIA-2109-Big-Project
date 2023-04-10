import styles from '../styles/consumption.module.css'
import OnePillOption from '../Components/Consumption/1pillOption'
import TwoPillOption from '../Components/Consumption/2pillOption'
import ThreePillOption from '../Components/Consumption/3pillOption'
import Next from "../Components/Next"
import NavBar from "../Components/NavBar"
import ProgressBar2 from '../Components/QuizProgressBar/QuizProgressBar2'
import Link from 'next/link'
import PrevButton from '../Components/PrevButton'
import React, { useState } from 'react'

export default function Consumption() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <>
        <div className={styles.main}>
            <PrevButton/>
            <h2>Step 2 of 3</h2>
            <ProgressBar2/>
            <h1>Select the Dosage taken within XX</h1>
            <div className={styles.options}>
                <OnePillOption
                onClick={() => handleOptionSelect('0.1g (1 pill)')}
                selected={selectedOption === '0.1g (1 pill)'}
                />
                <TwoPillOption 
                onClick={() => handleOptionSelect('0.2g (2 pills)')}
                selected={selectedOption === '0.2g (2 pills)'}
                />
                <ThreePillOption 
                onClick={() => handleOptionSelect('0.3g (3 pills)')}
                selected={selectedOption === '0.3g (3 pills)'}
                />
                <Link className={styles.nextButton} href='/weight'>
                        <Next />
                    </Link>
            </div>
            <NavBar />
            </div>
        </>
    )
}