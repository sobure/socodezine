import React, {useState} from 'react'
import styles from './Nav.module.css'

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
                <a>Portfolio</a> 
                <a>Services</a>
                <a>Contact</a>
                <a>About</a>
            </div>
            </div>
        </>
    )
}