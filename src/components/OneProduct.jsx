import React from 'react'
import {AiOutlinePlusSquare} from "react-icons/ai";
import {AiOutlineMinusSquare} from "react-icons/ai"

function OneProduct() {
  const stil = {margin: 7 + "em" , borderStyle: "dotted"};
  return (
    <div className=".card" style={stil}> 
        <img src="https:/picsum.photos/200" 
        alt="neka slika" 
        />
        <div className="card-body">
        <h3 className="card-title">product name</h3>
        <p className="card-text">Opis proizvoda</p>
       </div >
<button className='btn'><AiOutlinePlusSquare></AiOutlinePlusSquare></button>
<button className='btn'><AiOutlineMinusSquare/></button>
    </div>


  );
}

export default OneProduct
