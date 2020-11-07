import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../assets/img/HKScan_logo.png';
import slogan from '../assets/img/hkscan-purpose.svg';
import './navbar.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  
  const classes = useStyles();
  

  return (
    <div className={classes.root} >
      <AppBar position="static" class="navbar">
        <Toolbar>
            <div class="col-sm-4">
                <img src={logo} alt="HKSCan logo" class="logo"></img>
            </div>  
            <div class="col-sm-3"></div><img src={slogan} alt="slogan" class="slogan"></img>
            <div class="col-sm-6">
                <ul class="standard-nav visible-lg">
                <li><a href="./products.js" id="prod">Products</a></li>
                <li><a href="./products.js" id="fact">Facts</a></li>
                <li><a href="./products.js" id="agro">Agrofood Ecosystem® </a></li>
                <li><a href="./products.js" id="wt">What do you think?</a></li>
                </ul>               
            </div>
                     
        </Toolbar>
      </AppBar>
    </div>
  
  );
}