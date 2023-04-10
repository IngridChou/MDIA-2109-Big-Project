import React from "react";
import Image from "next/image";
import styles from './PrevButton.module.css'

export default function PrevButton() {
  return (
    <button className={styles.button} onClick={() => window.history.back()}>
      <Image src="/backArrow.svg" alt="Previous Button" width={25} height={25} />
    </button>
  );
}