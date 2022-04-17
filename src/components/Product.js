import React from 'react'

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
      <h6>{ product.title }</h6>
      <div className='price'>$ { product.price }</div>
      <div className='actions'>
        <button disabled={total + product.price > money} onClick={addBasket}>Satın Al</button>
        <span className='amount'>{ basketItem && basketItem.amount || 0 }</span>
        <button disabled={!basketItem} onClick={removeBasket}>Sat</button>
      </div>
      <style jsx>{`
        .product{
          padding:10px;
          background:#fff;
          border: 1px solid #ddd
        }
      `}
      </style>
    </div>
  )
}

export default Product