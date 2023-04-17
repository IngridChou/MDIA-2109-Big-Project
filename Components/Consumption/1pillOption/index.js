import styles from './1pill.module.css'
import Image from 'next/image'
import React from 'react'

/* 1 pill Option Button in quiz */
export default function OnePillOption({ selected, onClick }) {
    const handleClick = () => {
        onClick();
    };
    
    return (
        <>
            <div className={`${styles.main} ${selected ? styles.selected : ''}`}
            onClick={handleClick}>
                <Image src='/consumption/1-pill.png' width={31} height={31}/>
                <p>0.1g (1 pill)</p>
            </div>
        </>
    )
}
