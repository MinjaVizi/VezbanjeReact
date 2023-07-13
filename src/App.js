import './App.css';
import NavBar from './components/navbar';
import Products from './components/products';


function App() {
  const prom = <h1>Dobrodosli!</h1>
  return ( 
  <div className="App">
    <NavBar></NavBar>
    {prom} 
    <Products/>
    </div>
  );

}

export default App;
