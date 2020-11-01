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

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
}));

export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h5" noWrap>
            Material-UI
          </Typography>
          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton aria-label="display more actions" edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
