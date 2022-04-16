import Header from './components/Header';
import {useState} from 'react';
import Product from './components/Product';
import product from './product.json'


function App() {
  const [money, setMoney]=useState(100);
  return (
    <>
    <div>
     <Header money={money}/>
     {product.map(product => (
       <Product product={ product }/>
     ))} 
    </div>
    </>
  );
}

export default App;
