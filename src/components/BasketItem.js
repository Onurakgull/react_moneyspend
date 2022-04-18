import React from 'react'

const BasketItem = ( { item, product}) => {
  return (
    <>
    <li>
        <div>
            {product.title} * $ {item.amount} 
      </div>
    </li>
    </>
  )
}

export default BasketItem