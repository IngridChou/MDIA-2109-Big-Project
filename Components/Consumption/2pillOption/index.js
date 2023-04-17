import styles from './2pill.module.css'
import Image from 'next/image'
import React from 'react'

/* 2 pills Option Button in quiz */
export default function TwoPillOption({ selected, onClick }) {
    const handleClick = () => {
        onClick();
    };
    
    return (
        <>
            <div className={`${styles.main} ${selected ? styles.selected : ''}`}
            onClick={handleClick}>
                <Image src='/consumption/2-pills.png' width={44} height={45}/>
                <p>0.2g (2 pills)</p>
            </div>
        </>
    )
}
