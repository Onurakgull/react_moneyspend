import Header from './components/Header';
import {useState, useEffect} from 'react';
import Product from './components/Product';
import product from './product.json'


function App() {
  const [money, setMoney]=useState(100);
  const [basket, setBasket]=useState([]);

  useEffect(()=>{
    console.log(basket)
  },[basket])
  return (
    <>
    <div>
     <Header money={money}/>
     {product.map(product => (
       <Product product={ product } basket={basket} setBasket={setBasket}/>
     ))} 
    </div>
    </>
  );
}

export default App;
