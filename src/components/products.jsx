//precica rafce
//function komponenta
import React from 'react'
import OneProduct from "./OneProduct";

function Products({ products }) {
  //  const name= "naziv proizvoda";
  //  const desc= "neki opis proizvoda";
//  const prod = {
  //  title: "naziv proizvoda",
    //description: "neki opis proizvoda"
  //};
//function (a){
 // return a+10;
//}
// (a) => {
//  return a+10;
//}



  return (
    <div className='all-products'>

      {products.map((prod)=>( <OneProduct product= {prod}/>
))}
  {/*    <OneProduct product={products[0]} />
      <OneProduct product={products[1]} />
      <OneProduct product={products[2]} />
  */} </div>
  );

}



export default Products
