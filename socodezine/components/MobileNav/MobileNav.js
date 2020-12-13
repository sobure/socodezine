
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Nav from '../Nav/Nav'
import styles from "../Nav/Nav.module.css";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'black'
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Noto Sans SC, sans-serif',
    fontSize: '24px',
    color:'black'
  },
  AppBar:{
    background: 'white',
  }

}));





export default function ButtonAppBar() {
  const classes = useStyles();

  const [nav, setNav] = useState(styles.directoryHide);
  const [menu, setMenu] = useState(styles.Menu);
  const [home, setHome] = useState(styles.home);

  const slidebar = () => {
    console.log("slidebarmobile");
    setNav(styles.directoryOpen);
    setMenu(styles.home);
    setHome(styles.homebutton);
  };
  
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar} >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
             soco
          </Typography>
          <>
      <div className={styles.flexRow}>
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
           <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu" onClick={slidebar}>
            <MenuIcon />
          
          </IconButton>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}