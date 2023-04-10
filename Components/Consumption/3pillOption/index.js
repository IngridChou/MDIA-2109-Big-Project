import styles from './3pill.module.css'
import Image from 'next/image'
import React from 'react'

/* 3 pills Option Button in quiz */
export default function ThreePillOption({ selected, onClick }) {
    const handleClick = () => {
        onClick();
    };
    
    return (
        <>
            <div className={`${styles.main} ${selected ? styles.selected : ''}`}
            onClick={handleClick}>
                <Image src='/consumption/3-pills.png' width={45} height={45}/>
                <p>0.3g (3 pills)</p>
            </div>
        </>
    )
}
