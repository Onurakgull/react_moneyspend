import React from 'react'
import './Product.css'
import { moneyFormat } from '../helpers'

const Product = ( { product, money, total, basket, setBasket }) => {

  const basketItem = basket.find(item => item.id === product.id)

  const addBasket= ()=>{
   const checkBasket = basket.find(item => item.id === product.id)
    //Ürün daha önce eklenmişse,
   if(checkBasket){
    checkBasket.amount += 1
    setBasket([ ...basket.filter(item => item.id !== product.id), checkBasket])
   }else{
      setBasket([...basket , {
        id : product.id,
        amount : 1
      }])
   }
  }
  const removeBasket =() => {
    const checkBasket = basket.find(item => item.id === product.id)
    const removeWithoutCurrent = basket.filter(item => item.id !== product.id)

    checkBasket.amount -= 1
    if(checkBasket.amount === 0){
      setBasket([ ...removeWithoutCurrent])
    }else{
      setBasket([...removeWithoutCurrent, checkBasket])
    }
   
  }

  return (
    <div className='product'>
      <img src={product.image} alt=""/>
      <h6>{ product.title }</h6>
      <div className='price'>$ { moneyFormat(product.price) }</div>
      <div className='actions'>
        <button className='buy-btn' disabled={total + product.price > money} onClick={addBasket}>Satın Al</button>
        <span className='amount'>{ basketItem && basketItem.amount || 0 }</span>
        <button className='sell-btn' disabled={!basketItem} onClick={removeBasket}>Sat</button>
      </div>
    </div>
  )
}

export default Product