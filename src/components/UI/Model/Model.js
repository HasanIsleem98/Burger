import React from 'react';
import Auxx from '../../../hoc/Auxx';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css'
const Model =(props)=>{
    return(
        <Auxx>
            <Backdrop show={props.show} click={props.modelC}>
        </Backdrop>
        <div className="Modal" 
        style={
            {
                transform:props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1':'0'
            }
        }
        > 
            {props.children}
           

        </div>
        </Auxx>

    );
}
export default Model;