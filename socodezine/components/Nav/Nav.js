import React, {useState} from 'react'
import styles from './Nav.module.css'
import Link from 'next/link'

export default function Nav() {
    const [nav, setNav] = useState(styles.directoryHide)
    
    const slidebar = () => {
        console.log('hello')
        setNav(styles.directoryOpen);
    }

    return (
        <>
        <div className={styles.flexRow}>
            <div className={styles.Menu}><a onClick={slidebar}>MENU</a>
            </div>
            <div className={nav}>
                <Link href='/works'>
                    <a className={styles.link}>works</a>
                </Link>
                <Link href='/blog'>
                    <a className={styles.link}>blog</a>
                </Link>
                <Link href='/about'>
                    <a className={styles.link}>about</a>
                </Link>
            </div>
            </div>
        </>
    )
}