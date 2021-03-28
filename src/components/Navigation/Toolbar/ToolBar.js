import React from 'react';
import Logo from '../../Logo/Logo';
import Navigationitems from '../NavigationItems/NavigationItems';
import './Toolbar.css'
const toolbar =()=>{
return(

    <header className="Toolbar">
        <div>MNUE</div>
        <div>
            <Logo></Logo>
        </div>

        <nav className="nav">
           <Navigationitems></Navigationitems>
        </nav>
    </header>
);

}
export default toolbar;