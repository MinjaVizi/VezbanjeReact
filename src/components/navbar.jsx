// precica rfce
import React from "react";
import {BsCart4} from "react-icons/bs";
import { Link } from "react-router-dom"


function NavBar ({cartNum}) {
 

    return ( 
    <div className="navBar">  
      <Link to="/">My store</Link>
      <Link to="/cart" className="cart-items">
<div className="cart-items">
<BsCart4/> 
<p className="cart-num">{cartNum}</p>

</div></Link>
</div>
)}




export default NavBar;