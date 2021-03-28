import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BulidControl';
const controls =[
{label:"Salad",type:"salad"},
{label:"Bacon",type:"bacon"},
{label:"Cheese",type:"cheese"},
{label:"Meat",type:"meat"}



];
const buildControls = (props) =>(
    <div className="BuildControls" >
        <p>Current price : <strong>{props.price}</strong> </p>
        {controls.map(ctrl =>(
            <BuildControl 
            key={ctrl.label}
            label={ctrl.label}
            rm={()=>props.removed(ctrl.type)}
            addd={()=> props.added(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            
            ></BuildControl>

            
        ))}
        <button onClick={props.show} disabled={!props.purcheable} className="OrderButton">OrdarNow</button>
    </div>
); 
export default buildControls;