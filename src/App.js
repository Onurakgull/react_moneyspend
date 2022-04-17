import Header from './components/Header';
import {useState, useEffect} from 'react';
import Product from './components/Product';
import product from './product.json'
import Basket from './components/Basket';


function App() {
  const [money, setMoney]=useState(100);
  const [basket, setBasket]=useState([]);
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    setTotal(basket.reduce((acc, item) => {
        return acc + (item.amount * (product.find(product => product.id === item.id ).price))
      },0)
    )
  },[basket])

  const resetButton=()=>{
    setBasket([])
  }
  return (
    <>
   
     <Header total={total} money={money}/>
     {product.map(product => (
       <Product total={total} money={money} key={product.id} product={ product } basket={basket} setBasket={setBasket}/>
     ))}     
     {total > 0 && (
     <Basket resetButton={resetButton} product={product} basket={ basket } total={total}/>
     )}

    </>
  );
}

export default App;
