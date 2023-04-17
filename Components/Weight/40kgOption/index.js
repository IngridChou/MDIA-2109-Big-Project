import styles from './40kg.module.css'
import Image from 'next/image'
import React from 'react'

/* 40-50kg Option Button in quiz */
export default function FortyKgOption({ selected, onClick }) {
    const handleClick = () => {
        onClick();
    };
    
    return (
        <>
            <div className={`${styles.main} ${selected ? styles.selected : ''}`}
            onClick={handleClick}>
                <Image src='/weight/scale.png' width={37} height={37}/>
                <p>40kg ~ 50kg</p>
            </div>
        </>
    )
}
