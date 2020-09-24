import React, {useState, useEffect} from 'react'
import Nav from "../components/Nav/Nav.js";
import SiteCard from '../components/SiteCard/index.js'
import styles from './pagestyles/works.module.css'
import Link from 'next/link'

export default function works() {

    const [app, setApp] = useState({
        img: "./wander1.jpeg",
        name: "Wandr",
        type: "Web App"
    });

    const handleChange = () => { 
        console.log('hello')
        setApp({
        name:'Flight'

    })

}

useEffect(() => {
        setApp(app);
} )
    
        return (
        <>
        <div>
            <Nav classNames={styles.background}></Nav>
        </div>
        <SiteCard {...app}></SiteCard>
        <a onClick={handleChange}>button</a>
        </>
    )
}

// 9.17.20 11:21 am - having trouble using useEffects to pass new params