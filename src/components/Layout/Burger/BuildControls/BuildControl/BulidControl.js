import React from 'react';
import './BuildControl.css';

const buildControl = (props) =>(
    <div className ="BuildControl">
        <div className = "Label">{props.label}</div>
        <button className="Less"onClick={props.rm} disabled={props.disabled}>Less</button>
        <button className="More" onClick={props.addd}>More</button>
    </div>
); 
export default buildControl;