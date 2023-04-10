import styles from './60kg.module.css'
import Image from 'next/image'
import React from 'react'

/* 61 ~ 70+kg Option Button in quiz */
export default function SixtyKgOption({ selected, onClick }) {
    const handleClick = () => {
        onClick();
    };
    
    return (
        <>
            <div className={`${styles.main} ${selected ? styles.selected : ''}`}
            onClick={handleClick}>
            <Image src='/weight/scale.png' width={37} height={37}/>
                <p>61kg ~ 70+kg</p>
            </div>
        </>
    )
}
