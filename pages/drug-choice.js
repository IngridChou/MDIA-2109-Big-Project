import React, { useState } from 'react';
import styles from '../styles/drug-choice.module.css';
import AlcoholOption from "../Components/DrugChoice/AlcoholOption"
import MdmaOption from "../Components/DrugChoice/MdmaOption"
import CocaineOption from "../Components/DrugChoice/CocaineOption"
import Next from "../Components/Next"
import NavBar from "../Components/NavBar"
import ProgressBar1 from "../Components/QuizProgressBar/QuizProgressBar1"
import Link from 'next/link'
import PrevButton from '../Components/PrevButton'

export default function DrugChoice() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className={styles.main}>
        <PrevButton />
        <h2>Step 1 of 3</h2>
        <ProgressBar1 />
        <h1>Select a Substance to Test for</h1>
        <div className={styles.options}>
          <AlcoholOption
            onClick={() => handleOptionSelect('Alcohol')}
            selected={selectedOption === 'Alcohol'}
          />
          <MdmaOption
            onClick={() => handleOptionSelect('MDMA')}
            selected={selectedOption === 'MDMA'}
          />
          <CocaineOption
            onClick={() => handleOptionSelect('Cocaine')}
            selected={selectedOption === 'Cocaine'}
          />
          <Link className={styles.nextButton} href='/consumption'>
            <Next />
          </Link>
        </div>
        <NavBar />
      </div>
    </>
  );
}
