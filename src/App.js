import './App.css';
import NavBar from './components/navbar';
import Products from './components/products';
import { useState } from 'react';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Router, Link, Route } from "react-router-dom";


function App() {

  //const [state, setstate] = useState(initialState)
  const [cartNum, setCartNum] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState([
  //const [products] = useState ([])


    {
      id: 1,
      title: 'Bela cokolada',
      description: 'Bela cokolada je super.',
      amount: 0
    },
    {
      id: 2,
      title: 'Crna cokolada',
      description: 'Crna cokolada je ekstra',
      amount: 0
    },
    {
      id: 3,
      title: 'Kokice',
      description: 'Kokice se prave od kukuruza.',
      amount: 0
    },
    {
      id: 4,
      title: 'Proizvod 4',
      description: 'Opis proizvoda 4',
      amount: 0
    },
    {
      id: 5,
      title: 'Proizvod 5',
      description: 'Opis proizvoda 5',
      amount: 0
    }
  ]);
  function refreshCart () {
let newProducts = products.filter((prod)=> prod.amount > 0 )
setCartProducts (newProducts);

  }
  function addProduct (title, id){
    console.log("Dodat je proizvod: " + title);
    setCartNum(cartNum + 1);
    console.log("Broj proizvoda u korpi: " + cartNum);
    products.forEach ((prod)=>{
if(prod.id===id){prod.amount++;
 
}

console.log (prod.amount)
    });
    refreshCart();
  }


  function removeProduct (title, id){
    console.log("Oduzet je proizvod: " + title);
    if (cartNum >0){ setCartNum(cartNum - 1);
    }
    console.log("Broj proizvoda u korpi: " + cartNum);
    products.forEach ((prod)=>{

        if(prod.id===id){prod.amount--;

        }

      console.log (prod.amount)
    });
    refreshCart();
  }


 // function removeProduct (title, id){
 //  console.log("Oduzet je proizvod: " + title);
 //  setCartNum(cartNum - 1);
  //  console.log("Broj proizvoda u korpi: " + cartNum);
//    if(prod.id===id){prod.amount--;}
 // }
 // refreshCart();
 // console.log (prod.amount)

  return ( 
  <BrowserRouter className="App">
    <NavBar cartNum={cartNum}></NavBar>
  <Routes>
    <Route 
    path="/"
    element=  {<Products products={products} onAdd={addProduct} onRemove={removeProduct}/>} />

<Route 
path="/cart" element={<Cart products={cartProducts}/>} />


  </Routes>
  </BrowserRouter>
  );

}

export default App;
