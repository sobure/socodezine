import React, { useState } from "react";
import styles from "./Nav.module.css";
import Link from "next/link";

export default function Nav() {
  const [nav, setNav] = useState(styles.directoryHide);
  const [menu, setMenu] = useState(styles.Menu);
  const [home, setHome] = useState(styles.home);

  const slidebar = () => {
    console.log("hello");
    setNav(styles.directoryOpen);
    setMenu(styles.home);
    setHome(styles.homebutton);
  };

  return (
    <>
      <div className={styles.flexRow}>
        <div className={menu}>
          <a onClick={slidebar}>menu</a>
        </div>
        <div className={home}>
          <Link href="/">
            <a>home</a>
          </Link>
        </div>
        <div className={nav}>
          <Link href="/works">
            <a className={styles.link}>works</a>
          </Link>
          <Link href="/blog">
            <a className={styles.link}>blog</a>
          </Link>
          <Link href="/about">
            <a className={styles.link}>about</a>
          </Link>
        </div>
      </div>
    </>
  );
}

