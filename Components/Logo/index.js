import Image from "next/image";
import styles from './Logo.module.css'
import Link from "next/link";

export default function Logo() {
    return (
        <Link className={styles.logo} href='/home'>
            <Image src="/logo.svg" width={600} height={55} />
        </Link>
    );
}