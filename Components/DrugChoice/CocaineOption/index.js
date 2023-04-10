import styles from './Cocaine.module.css'
import Image from 'next/image'
import React from 'react';

/* Cocaine Option Button in quiz */
export default function CocaineOption({ selected, onClick }) {
   const handleClick = () => {
    onClick();
  };

    return (
        <>
            <div className={`${styles.main} ${selected ? styles.selected : ''}`}
        onClick={handleClick}>
                <Image src='/drug-choice/cocaine.png' width={45} height={34}/>
                <p>Cocaine</p>
            </div>
        </>
    )
}
