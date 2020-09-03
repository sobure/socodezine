import styles from './Launch.module.css'
import React, {useContext, useState} from "react";

export default function Launch() {
    const [date, setDay] = useState({
        day: "",
        hour: "",
        minutes: "",
        seconds: ""
    })

    const countFunc = () => {
         //date for counter
    var countDownDate = new Date('Sep 10, 2020 00:00:00').getTime();
    //current date
    var now =  new Date().getTime();
    //updated time
    var distance = countDownDate - now;
    // Time calculations for days, hours, and minutes and seconds 
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var second = Math.floor((distance % (1000 * 60)) / 1000);
    setDay({
        day: days,
        hour: hours,
        minutes: minutes,
        seconds: second
    })
    }
       // Update the count down every 1 second
    var x = setInterval(countFunc)

    return (
        <body className={styles.background}>
            <div className={styles.timerdiv}>
            <h2 className={styles.timer}> 0{date.day}:0{date.hour}:{date.minutes}:{date.seconds} 
            </h2>
            </div>
        </body>
    )
}