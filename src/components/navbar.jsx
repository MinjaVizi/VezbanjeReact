// precica rfce
import React from "react";
import {BsCart4} from "react-icons/bs";

function NavBar ({cartNum}) {
 

    return ( 
    <div className="navBar">  
      <a> my store</a>
<div className="cart-items">
<BsCart4/> 
<p className="cart-num">{cartNum}</p>

</div>
</div>
);

}


export default NavBar;