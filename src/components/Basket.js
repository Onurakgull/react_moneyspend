import React from 'react'
import BasketItem from './BasketItem'

const Basket = ( { basket, product, total, resetButton } ) => {
  return (
    <>
        {basket.map(item => (
            <BasketItem item={item} product={product.find(p => p.id === item.id)}/>
        ))}
        Toplam Satış= ${total}
        <br/>
        <button onClick={resetButton}>Sepeti Sıfırla</button>
    </>
  )
}

export default Basket