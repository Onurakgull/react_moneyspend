import React from 'react'
import BasketItem from './BasketItem'
import { moneyFormat } from '../helpers'
import './Product.css'

const Basket = ( { basket, product, total, resetButton } ) => {
  return (
    <>
       <div className='basket-container container'>
        <h3>Alışveriş Detayları</h3>
        <ul>
        {basket.map(item => (
            <BasketItem item={item} product={product.find(p => p.id === item.id)}/>
        ))}
        </ul>
         <div className='total'>
            Toplam Satış= ${moneyFormat(total)}
        </div>
        <br/>
        <button className='reset-btn' onClick={resetButton}>Sepeti Sıfırla</button>
       </div>
    </>
  )
}

export default Basket