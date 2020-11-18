
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Nav from '../Nav/Nav'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'red',
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

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
             soco
          </Typography>
           <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}