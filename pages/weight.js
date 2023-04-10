import styles from '../styles/weight.module.css'
import FortyKgOption from '../Components/Weight/40kgOption'
import FiftyKgOption from '../Components/Weight/50kgOption'
import SixtyKgOption from '../Components/Weight/60kgOption'
import Submit from '../Components/Submit'
import NavBar from "../Components/NavBar"
import ProgressBar3 from "../Components/QuizProgressBar/QuizProgressBar3"
import Link from 'next/link'
import PrevButton from '../Components/PrevButton'
import React, { useState } from 'react'

export default function Weight() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <>
            <div className={styles.main}>
                <PrevButton />
                <h2>Step 3 of 3</h2>
                <ProgressBar3 />
                <h1>Select your Body Weight</h1>
                <div className={styles.options}>
                    <FortyKgOption
                        onClick={() => handleOptionSelect('40kg ~ 50kg')}
                        selected={selectedOption === '40kg ~ 50kg'}
                    />
                    <FiftyKgOption
                        onClick={() => handleOptionSelect('51kg ~ 60kg')}
                        selected={selectedOption === '51kg ~ 60kg'}
                    />
                    <SixtyKgOption
                        onClick={() => handleOptionSelect('61kg ~ 70+kg')}
                        selected={selectedOption === '61kg ~ 70+kg'}
                    />
                    <Link className={styles.nextButton} href='/results'>
                        <Submit />
                    </Link>
                </div>
                <NavBar />
            </div>

        </>
    )
}