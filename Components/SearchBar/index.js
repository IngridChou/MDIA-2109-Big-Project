import { useState } from 'react';
import styles from './SearchBar.module.css';
import Image from 'next/image';

export default function SearchBar() {
  return (
    <form>
      <input className={styles.input} type="text"/>
      <button className={styles.button} type="submit">
        <Image src="/" alt="Search Button" width={25} height={25}/>
      </button>
    </form>
  );
}
