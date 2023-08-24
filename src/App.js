import './App.css';
import { BrowserRouter, Routes, Router, Link, Route } from "react-router-dom";
import NavBar from './components/navbar';
import Products from './components/products';
import { useState } from 'react';
import Cart from './components/Cart';
import Footer from './components/Footrer';
import Details from './components/Details';

function App() {
  const [cartNum, setCartNum] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState([
{
    id: 1,
    title: 'Proizvod 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis est a ante interdum cursus a sed sapien. Fusce non odio non purus bibendum vehicula. Etiam et pharetra dui. Proin non urna sed purus aliquam semper. Suspendisse volutpat enim ac ipsum vestibulum, eu auctor lectus consectetur. Nullam vehicula justo at mauris ultrices viverra. Cras interdum lectus in bibendum commodo. Integer gravida, arcu ut dapibus posuere, ante dui fermentum ligula, nec convallis ex metus id nisi. Sed suscipit eleifend sapien, sit amet gravida nunc efficitur vel. Aenean sodales sapien vel metus facilisis, ac hendrerit velit bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus id turpis sed est porttitor facilisis. Sed at sollicitudin eros. Aliquam erat volutpat.',
    amount: 0,
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzkM7kUJZhKLFVf7sXGYCMKarqCSwVdu3t7w&usqp=CAU', // Dodajte stvarni URL
    price: 100, 
  },
  {
    id: 2,
    title: 'Proizvod 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis est a ante interdum cursus a sed sapien. Fusce non odio non purus bibendum vehicula. Etiam et pharetra dui. Proin non urna sed purus aliquam semper. Suspendisse volutpat enim ac ipsum vestibulum, eu auctor lectus consectetur. Nullam vehicula justo at mauris ultrices viverra. Cras interdum lectus in bibendum commodo. Integer gravida, arcu ut dapibus posuere, ante dui fermentum ligula, nec convallis ex metus id nisi. Sed suscipit eleifend sapien, sit amet gravida nunc efficitur vel. Aenean sodales sapien vel metus facilisis, ac hendrerit velit bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus id turpis sed est porttitor facilisis. Sed at sollicitudin eros. Aliquam erat volutpat.',
    amount: 0,
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqISsYyeHabFnv3akk7Zn_o5c_wwKRIlkmuA&usqp=CAU', // Dodajte stvarni URL
    price: 200, 
  },
  {
    id: 3,
    title: 'Proizvod 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis est a ante interdum cursus a sed sapien. Fusce non odio non purus bibendum vehicula. Etiam et pharetra dui. Proin non urna sed purus aliquam semper. Suspendisse volutpat enim ac ipsum vestibulum, eu auctor lectus consectetur. Nullam vehicula justo at mauris ultrices viverra. Cras interdum lectus in bibendum commodo. Integer gravida, arcu ut dapibus posuere, ante dui fermentum ligula, nec convallis ex metus id nisi. Sed suscipit eleifend sapien, sit amet gravida nunc efficitur vel. Aenean sodales sapien vel metus facilisis, ac hendrerit velit bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus id turpis sed est porttitor facilisis. Sed at sollicitudin eros. Aliquam erat volutpat.',
    amount: 0,
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh7tVVNbs1v_K7V86hY-Y4r8XBQ9aXUWu0NvhkMHpQFd3qIRWjp-7XFAHg5GWdleUFA60&usqp=CAU', // Dodajte stvarni URL
    price: 200, 
  },

  {
    id: 4,
    title: 'Proizvod 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis est a ante interdum cursus a sed sapien. Fusce non odio non purus bibendum vehicula. Etiam et pharetra dui. Proin non urna sed purus aliquam semper. Suspendisse volutpat enim ac ipsum vestibulum, eu auctor lectus consectetur. Nullam vehicula justo at mauris ultrices viverra. Cras interdum lectus in bibendum commodo. Integer gravida, arcu ut dapibus posuere, ante dui fermentum ligula, nec convallis ex metus id nisi. Sed suscipit eleifend sapien, sit amet gravida nunc efficitur vel. Aenean sodales sapien vel metus facilisis, ac hendrerit velit bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus id turpis sed est porttitor facilisis. Sed at sollicitudin eros. Aliquam erat volutpat.',
    amount: 0,
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJhBB8WLWhNhXe8f6pD1N_8gbHX_cM7X6Mw&usqp=CAU', // Dodajte stvarni URL
    price: 200, 
  },

  {
    id: 5,
    title: 'Proizvod 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis est a ante interdum cursus a sed sapien. Fusce non odio non purus bibendum vehicula. Etiam et pharetra dui. Proin non urna sed purus aliquam semper. Suspendisse volutpat enim ac ipsum vestibulum, eu auctor lectus consectetur. Nullam vehicula justo at mauris ultrices viverra. Cras interdum lectus in bibendum commodo. Integer gravida, arcu ut dapibus posuere, ante dui fermentum ligula, nec convallis ex metus id nisi. Sed suscipit eleifend sapien, sit amet gravida nunc efficitur vel. Aenean sodales sapien vel metus facilisis, ac hendrerit velit bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus id turpis sed est porttitor facilisis. Sed at sollicitudin eros. Aliquam erat volutpat.',
    amount: 0,
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ7JqDadXZbGLQEMPHJIQvUpgqGykZzD9wxw&usqp=CAU', // Dodajte stvarni URL
    price: 200, 
  },



]);
const [searchTerm, setSearchTerm] = useState(""); 

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


  return (
    <div className="app">
      <navbar cartNum={cartNum} />
      <div className="content">
        <BrowserRouter>
          <NavBar cartNum={cartNum} setSearchTerm={setSearchTerm} products={products}/>
          <Routes>
            <Route
              path="/"
              element={
                <Products
                  products={products}
                  onAdd={addProduct}
                  onRemove={removeProduct}
                  searchTerm={searchTerm}
                />
              }
            />
            <Route path="/cart" element={<Cart products={cartProducts} />} />
            <Route path="/products/:id" element={<Details products={products} />} />

          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
