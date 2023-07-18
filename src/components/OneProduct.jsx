import React from 'react'
import {AiOutlinePlusSquare} from "react-icons/ai";
import {AiOutlineMinusSquare} from "react-icons/ai"





function OneProduct(props) {
  const stil = {margin: 2 + "em" , borderStyle: "dotted"};
 console.log(props)
function onAdd (title){
  console.log("Dodat proizvod: " + title)
 }
 function onRemove (title ){
  console.log ("Oduzet proizvod: " + title)
 }

 //if (inCart=== 1){
 // uradi nesto
//}
 //else {
//  uradi nesto drugo
// }
console.log (props)
   return (
    <div className= {props.inCart===1 ? "card" : ".card-cart "} style={stil}> 
        <img 
        className={props.inCart===1 ?'card-img-top' : "card-img-left" }
        src="https:/picsum.photos/200" 
        alt="neka slika" 
        />
        <div className="card-body">
        <h3 className="card-title">{props.product.title}</h3>
        <p className="card-text">{props.product.description}</p>
       </div >

     {props.inCart===1 ? (
       <>
{/* <button className='btn' onClick={()=>onAdd(props.product.title)}> */}

<button className='btn' onClick={()=>props.onAdd(props.product.title, props.product.id)}>
  <AiOutlinePlusSquare/>
  </button>

<button className='btn' onClick={()=>props.onRemove(props.product.title, props.product.id)}>
  <AiOutlineMinusSquare/>
  </button>
</>
):<h3>Amount: {props.product.amount} </h3>}
    
    </div>

  );
}

export default OneProduct
