import React from 'react';
import './Logo.css';
import srcimage from '../../assests/images/burger-logo.png';
const logo =(props) =>{
return(
<div className="Logo" >
    <img  src={srcimage} alt="myBurger"></img>

</div>

);

}
export default logo;