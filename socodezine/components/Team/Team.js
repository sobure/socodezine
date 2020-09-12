import React, {useState, useEffect} from 'react'
import styles from './Team.module.css'

export default function team() {
    const [profile, setProfile] =  useState({
        name: "solo",
            position:"c. director",
            img: "./profile.png"
    });
    console.log(profile.img)

    // useEffect(() => {
    //     setProfile({ 
    //         name: "solo",
    //         position:"c. director",
    //         img: './profile.jpg'}
    //     )
    // });

    return(
        <>
        <div className={styles.text}>
        <h1>{profile.name}</h1>
        <h2>{profile.position}</h2>
        <img src={profile.img} className={styles.img}/>
    
        <div> - about solo-</div>
        <p>It may not be obvious, but Solo studied Mechanical Eningeering at the Unvierstiy of Georgia.</p>
        </div>
        <div></div>
        </>
    )
}