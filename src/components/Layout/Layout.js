import React from 'react';
import Auxx from '../../hoc/Auxx'
import Sidedrawer from '../Navigation/sideDrawer/sideDrawer';
import Toolbar from '../Navigation/Toolbar/ToolBar';
import './Layout.css';
const Layout =(props)=>(
    <Auxx>
<div><Toolbar></Toolbar>

</div>
<main className='content'>{props.children}</main>
</Auxx>
);
export default Layout;