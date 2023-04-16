import React from 'react';
import styles from './Alcohol.module.css';
import Image from 'next/image';

/* Alcohol Option Button in quiz */
export default function AlcoholOption({ selected, onClick }) {
  const handleClick = () => {
    onClick();
  };

  return (
    <>
      <div className={`${styles.main} ${selected ? styles.selected : ''}`}
        onClick={handleClick}>
        <Image src='/drug-choice/alcohol.svg' width={23} height={43} />
        <p>Alcohol</p>
      </div>
    </>
  );
}
