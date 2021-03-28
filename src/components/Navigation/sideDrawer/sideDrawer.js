import React from 'react';
import Logo from '../../Logo/Logo';
import Navigationitems from '../NavigationItems/NavigationItems';
import './sideDrawer.css';
const sidedrawer =(props)=>{

 return(
<div className="sideDrawer">
    <Logo></Logo>
    <nav>
        <Navigationitems></Navigationitems>
    </nav>
</div>
 );   
}
export default sidedrawer;