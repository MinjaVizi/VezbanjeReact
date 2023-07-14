import './App.css';
import NavBar from './components/navbar';
import Products from './components/products';
import { useState } from 'react';


function App() {

  //const [state, setstate] = useState(initialState)
  const [cartNum, setCartNum] = useState(0);


  const products = [
    {
      id: 1,
      title: 'Proizvod 1',
      description: 'Opis proizvoda 1',
      amount: 10
    },
    {
      id: 2,
      title: 'Proizvod 2',
      description: 'Opis proizvoda 2',
      amount: 5
    },
    {
      id: 3,
      title: 'Proizvod 3',
      description: 'Opis proizvoda 3',
      amount: 3
    },
    {
      id: 4,
      title: 'Proizvod 4',
      description: 'Opis proizvoda 4',
      amount: 8
    },
    {
      id: 5,
      title: 'Proizvod 5',
      description: 'Opis proizvoda 5',
      amount: 2
    }
  ];
  function addProduct (title){
    console.log("Dodat je proizvod: " + title);
    setCartNum(cartNum + 1);
    console.log("Broj proizvoda u korpi: " + cartNum);
  }
  function removeProduct (title){
    console.log("Oduzet je proizvod: " + title);
    setCartNum(cartNum - 1);
    console.log("Broj proizvoda u korpi: " + cartNum);
  }

  return ( 
  <div className="App">
    <NavBar cartNum={cartNum}></NavBar>
  
    <Products products={products} onAdd={addProduct} onRemove={removeProduct}/>
    
    </div>
  );

}

export default App;
