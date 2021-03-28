import React ,{Component } from 'react';
import Axios from '../../axios-order'
import Burger from '../../components/Layout/Burger/Bueger';
import BuildControls from '../../components/Layout/Burger/BuildControls/BuildControls';
import OrdarSummary from '../../components/Layout/Burger/OrdarSummary/OrdarSummary';
import Model from '../../components/UI/Model/Model';
import Auxx from '../../hoc/Auxx'
const INGREDIEN_PRICE={
    salad:0.5,
    bacon:0.7,
   cheese:0.9,
     meat:1.2
}
class BurgerBilder extends Component{

    state= {
        ingredien:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purcheable:false,
        purchsing:false
        }
        updatepurcheable(ingredien){
      // const arr= {...this.state.ingredien}
       const sum=Object.keys(ingredien)
       .map(igkey=>{
           return ingredien[igkey];
       })
       .reduce((sum,el)=>{
       return sum +el;
       
       },0);
        this.setState({purcheable: sum >0})  


        }
     addIngredienHandler=(type)=>{
     const oldcount=this.state.ingredien[type];
     const newcount=oldcount+1;
     const arr={...this.state.ingredien};
     arr[type]=newcount;
     const priceadd=INGREDIEN_PRICE[type];
     const oldprice=this.state.totalPrice;
     const newprice=priceadd+oldprice;

     this.setState({ingredien:arr,totalPrice:newprice})
     this.updatepurcheable(arr);
    }
    removeIngredienHandler=(type)=>{
    const oldcount=this.state.ingredien[type];
    if(oldcount <= 0){
     return;
    }
    const newcount=oldcount-1;
    const arr={...this.state.ingredien};
    arr[type]=newcount;
    const priceadd=INGREDIEN_PRICE[type];

    const oldprice=this.state.totalPrice;
    const newprice=priceadd-oldprice;
    this.setState({ingredien:arr,totalPrice:newprice})
    this.updatepurcheable(arr);

    }
    purchsingF =()=>{
        this.setState({purchsing:true});
    }
    modelClosed =()=>{
        this.setState({purchsing:false});

    }
    purchaseCancel=()=>{
        this.setState({purchsing:false});

    }
    purchaseContinuo=()=>{
        const order ={
            ingredient:this.state.ingredien,
            price:this.state.totalPrice,
            custmer:{
                name :'hasan ali',
                address:{
                street:'rashed',
                zipCode:'5452',
                country:'palestine'
                },
                email:'dsadasdas'
            },
            dilivar:'faster'

        }
        Axios.post('/order.json',order)
        .then(response => console.log(response))
        .catch(error =>console.log(error))
        //alert("You continue !");
    }
render(){
    const arrtype={...this.state.ingredien};
    for(let key in arrtype){
    arrtype[key]= arrtype[key] <= 0

    }
    return(
        <Auxx>
            <Model show={this.state.purchsing} modelC={this.modelClosed}>
            <OrdarSummary intg={this.state.ingredien}
            price={this.state.totalPrice}
            cancel={this.purchaseCancel}
            continue={this.purchaseContinuo}

            ></OrdarSummary>

            </Model>
         <div>
         <Burger ingredien={this.state.ingredien}></Burger>
         <BuildControls
         added={this.addIngredienHandler} 
         removed={this.removeIngredienHandler} 
         disabled={arrtype}
         purcheable={this.state.purcheable}
         price={this.state.totalPrice}
         show={this.purchsingF}
         >

         </BuildControls>

           
         </div>
        </Auxx>
    );
}
}
export default BurgerBilder;