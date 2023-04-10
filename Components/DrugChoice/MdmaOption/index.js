import styles from './Mdma.module.css'
import Image from 'next/image'
import React from 'react';

/* MDMA Option Button in quiz */
export default function MdmaOption({ selected, onClick }) {
    const handleClick = () => {
        onClick();
    };

    return (
        <>
            <div className={`${styles.main} ${selected ? styles.selected : ''}`}
                onClick={handleClick}>
                <Image src='/drug-choice/mdma.png' width={47} height={43} />
                <p>MDMA</p>
            </div>
        </>
    )
}
