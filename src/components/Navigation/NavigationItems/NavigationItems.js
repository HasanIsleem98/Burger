import React from 'react';
import Navigationitem from './NavigationItem/NavigationItem';
import './NavigationItems.css'
const navigationitems=(props)=>{
return(

    <ul className='NavigationItems'>
<Navigationitem active>A Link</Navigationitem>
<Navigationitem>Home</Navigationitem>
    </ul>
);
}
export default navigationitems;