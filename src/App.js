import './App.css';
import NavBar from './components/navbar';
import Products from './components/products';


function App() {
  const prom = <h1>Dobrodosli</h1>
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
  
  return ( 
  <div className="App">
    <NavBar></NavBar>
  
    <Products products={products} />
    </div>
  );

}

export default App;
