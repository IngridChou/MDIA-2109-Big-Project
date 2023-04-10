import styles from './50kg.module.css'
import Image from 'next/image'
import React from 'react';

/* 51 ~ 60kg Option Button in quiz */
export default function FiftyKgOption({ selected, onClick }) {
    const handleClick = () => {
        onClick();
    };

    return (
        <>
            <div className={`${styles.main} ${selected ? styles.selected : ''}`}
                onClick={handleClick}>
                <Image src='/weight/scale.png' width={37} height={37} />
                <p>51kg ~ 60kg</p>
            </div>
        </>
    )
}
