import React, { useState } from "react";
import styles from "./SiteCard.module.css";

const App = (props) => {
  const [app, setAppState] = useState(props);

  return (
    <>
    <div className={styles.sitecard}>
      <div className={styles.boxphoto}>
        <img className={styles.img}src={app.img}></img>
        <div className={styles.content}>
          <div className={styles.contentItems}>
            <h3>{app.name}</h3>
            <div className={styles.row}>
              <a className={styles.boxleft}>{app.type}</a>
              <a classNames={styles.boxright}>2020</a>
            </div>
          </div>
        </div>
        <footer className={styles.contentItems}>
          <div className={styles.row}>
            <a>{app.author}</a>
            <div className={styles.tech}>
              <span className={styles.react}>react</span>
              <span className={styles.react}>node.js</span>
              <span className={styles.react}>express</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
    </>
  );
};

export default App;
