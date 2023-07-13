import React from 'react'
import {AiOutlinePlusSquare} from "react-icons/ai";
import {AiOutlineMinusSquare} from "react-icons/ai"






function OneProduct(props) {
  const stil = {margin: 7 + "em" , borderStyle: "dotted"};
 // console.log(props)
  return (
    <div className=".card" style={stil}> 
        <img src="https:/picsum.photos/200" 
        alt="neka slika" 
        />
        <div className="card-body">
        <h3 className="card-title">{props.product.title}</h3>
        <p className="card-text">{props.product.description}</p>
       </div >
<button className='btn'><AiOutlinePlusSquare></AiOutlinePlusSquare></button>
<button className='btn'><AiOutlineMinusSquare/></button>
    </div>


  );
}

export default OneProduct
