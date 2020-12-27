import React, { useState } from "react";
import styles from "./Nav.module.css";
import Link from "next/link";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  }
));

export default function Nav(props) {

  const classes = useStyles();
  
  const [nav, setNav] = useState(styles.directoryHide);
  const [menu, setMenu] = useState(styles.Menu);
  const [home, setHome] = useState(styles.home);

  
  
  const slidebar = () => {
    
    setNav(styles.directoryOpen);
    setMenu(styles.home);
    setHome(styles.homebutton);
  };



  return (
<div className={classes.root}>
      <AppBar  position="static">
        <Toolbar className='AppBar' variant="dense">
        <div className='wrapper'>
          <img src={'logo.png'} className='logo'/>
          <IconButton edge="end" color="inherit" aria-label="menu">
            <MenuIcon className='menuButton'/>
          </IconButton>
        </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

