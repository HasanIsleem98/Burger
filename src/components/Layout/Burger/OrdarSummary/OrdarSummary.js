import React ,{Component } from 'react';
import Button from '../../../UI/Button/Button';
const OrdarSummary =(props)=>{
   const   arr=Object.keys(props.intg)
      .map(igkey=>{
          return <li> {igkey} :  {props.intg[igkey]}  </li>
      });
return(
    <div>
        <h3>Your Order</h3>
        <h4>A delicious burger with a Ingredients:</h4>
<ul>
    {arr}
</ul>
<p>
    <strong>Total Price : {props.price} </strong>
</p>
<p>continuo to checkOut?</p>
<Button btntype="Danger" clicked={props.cancel} >Cancel</Button>

<Button btntype="Success" clicked={props.continue} >continue</Button>

    </div>
);

}
export default OrdarSummary;