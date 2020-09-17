import React from 'react'
import styles from './siteTag.module.css'

function siteTag() {
return(
    <>
    <h1 className={styles.tag}> a design firm</h1>

    <h3 className={styles.tag2}>
        for your ideas.
    </h3>
    <div className={styles.absolute}>
    <h2 className={styles.tag3}>
   UX UI </h2>
   <h2 className={styles.tag3}>
       Digital</h2>
   <h2 className={styles.tag3}>Branding
   </h2>
   </div>
    </>
)
 }

 export default siteTag