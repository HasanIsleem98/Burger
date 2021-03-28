import React ,{Component } from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';
const Burger = (props) => {
    let ggingredien=Object.keys(props.ingredien)
    .map(igkey=>{
     return [...Array(props.ingredien[igkey])].map((_,i) => {
         return <BurgerIngredient key ={igkey+i} type={igkey}></BurgerIngredient>
     });
    
    } ).reduce((arr,el)=>{
       return arr.concat(el)
    },[]);
if(ggingredien.length === 0){
    ggingredien=<p>please enter the Ingredients</p>
}
return(

<div className="Burger">
    <BurgerIngredient type="bread-top"></BurgerIngredient>
    {ggingredien}
    <BurgerIngredient type="bread-bottom"></BurgerIngredient>

</div>


);

}
export default Burger;